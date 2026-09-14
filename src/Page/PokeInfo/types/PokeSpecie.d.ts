export interface PokeSpecie {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: GrowthRate
  pokedex_numbers: PokedexNumber[]
  egg_groups: EggGroup[]
  color: Color
  shape: Shape
  evolves_from_species: EvolvesFromSpecies
  evolution_chain: EvolutionChain
  habitat: Habitat
  generation: Generation
  names: Name[]
  pal_park_encounters: PalParkEncounter[]
  form_descriptions: any[]
  flavor_text_entries: FlavorTextEntry[]
  genera: Genera[]
  varieties: Variety[]
}

export interface GrowthRate {
  name: string
  url: string
}

export interface PokedexNumber {
  entry_number: number
  pokedex: Pokedex
}

export interface Pokedex {
  name: string
  url: string
}

export interface EggGroup {
  name: string
  url: string
}

export interface Color {
  name: string
  url: string
}

export interface Shape {
  name: string
  url: string
}

export interface EvolvesFromSpecies {
  name: string
  url: string
}

export interface EvolutionChain {
  url: string
}

export interface Habitat {
  name: string
  url: string
}

export interface Generation {
  name: string
  url: string
}

export interface Name {
  name: string
  language: Language
}

export interface Language {
  name: string
  url: string
}

export interface PalParkEncounter {
  base_score: number
  rate: number
  area: Area
}

export interface Area {
  name: string
  url: string
}

export interface FlavorTextEntry {
  flavor_text: string
  language: Language2
  version: Version
}

export interface Language2 {
  name: string
  url: string
}

export interface Version {
  name: string
  url: string
}

export interface Genera {
  genus: string
  language: Language3
}

export interface Language3 {
  name: string
  url: string
}

export interface Variety {
  is_default: boolean
  pokemon: Pokemon
}

export interface Pokemon {
  name: string
  url: string
}
