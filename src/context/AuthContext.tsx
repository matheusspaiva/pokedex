import React, { createContext, useContext, useEffect, useState } from 'react'
import backendApi from '../api/backendApi'

export interface User { name: string; email: string; code?: string | null }
interface AuthContextValue {
  user: User | null
  token: string | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  captured: number[]
  isCaptured: (pokemonId: number) => boolean
  toggleCaptured: (pokemonId: number) => Promise<boolean>
  refreshUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)
const dataOf = (response: any) => response?.data?.data ?? response?.data ?? {}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem('pokedex-token'))
  const [user, setUser] = useState<User | null>(null)
  const [captured, setCaptured] = useState<number[]>([])
  const [loading, setLoading] = useState(true)

  const refreshUser = async () => {
    if (!localStorage.getItem('pokedex-token')) return
    const [profile, collection] = await Promise.all([backendApi.get('/me'), backendApi.get('/captured-pokemon')])
    const profileData = dataOf(profile)
    setUser(profileData.user ?? profileData)
    const records = dataOf(collection)
    setCaptured((records.pokemon ?? records ?? []).map((item: any) => Number(item.pokemonId ?? item)))
  }

  useEffect(() => { refreshUser().catch(() => logout()).finally(() => setLoading(false)) }, [])

  const login = async (email: string, password: string) => {
    const response = await backendApi.post('/login', { email, password })
    const data = dataOf(response)
    const nextToken = data.token ?? data.accessToken
    if (!nextToken) throw new Error('A API não retornou um token de acesso.')
    localStorage.setItem('pokedex-token', nextToken); setToken(nextToken)
    await refreshUser()
  }
  const register = async (name: string, email: string, password: string) => {
    await backendApi.post('/users', { name, email, password }); await login(email, password)
  }
  const logout = () => { localStorage.removeItem('pokedex-token'); setToken(null); setUser(null); setCaptured([]) }
  const isCaptured = (pokemonId: number) => captured.includes(pokemonId)
  const toggleCaptured = async (pokemonId: number) => {
    const wasCaptured = isCaptured(pokemonId)
    if (wasCaptured) await backendApi.delete(`/captured-pokemon/${pokemonId}`)
    else await backendApi.post('/captured-pokemon', { pokemonId })
    setCaptured(current => wasCaptured ? current.filter(id => id !== pokemonId) : [...current, pokemonId])
    return !wasCaptured
  }
  return <AuthContext.Provider value={{ user, token, loading, login, register, logout, captured, isCaptured, toggleCaptured, refreshUser }}>{children}</AuthContext.Provider>
}

export const useAuth = () => { const value = useContext(AuthContext); if (!value) throw new Error('useAuth deve ser usado dentro de AuthProvider'); return value }
