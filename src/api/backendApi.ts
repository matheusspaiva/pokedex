import axios from 'axios'

const backendApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://pokedex-backend-hazel.vercel.app/api',
  headers: { 'Content-Type': 'application/json' }
})

backendApi.interceptors.request.use(config => {
  const token = localStorage.getItem('pokedex-token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default backendApi
