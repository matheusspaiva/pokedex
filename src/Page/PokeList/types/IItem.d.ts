export interface IItem {
  id: number
  name: string
  fling_power: any
  fling_effect: any
  attributes: Attribute[]
  category: Category
  effect_entries: EffectEntry[]
  flavor_text_entries: FlavorTextEntry[]
  game_indices: Index[]
  prices: Price[]
  names: Name[]
  held_by_pokemon: any[]
  sprites: Sprites
  baby_trigger_for: any
  machines: any[]
}

export interface Attribute {
  name: string
  url: string
}

export interface Category {
  name: string
  url: string
}

export interface EffectEntry {
  effect: string
  short_effect: string
  language: Language
}

export interface Language {
  name: string
  url: string
}

export interface FlavorTextEntry {
  text: string
  version_group: VersionGroup
  language: Language2
}

export interface VersionGroup {
  name: string
  url: string
}

export interface Language2 {
  name: string
  url: string
}

export interface Index {
  game_index: number
  generation: Generation
}

export interface Generation {
  name: string
  url: string
}

export interface Price {
  purchase_price: any
  sell_price: number
  currency: Currency
  version_group: VersionGroup2
}

export interface Currency {
  name: string
  url: string
}

export interface VersionGroup2 {
  name: string
  url: string
}

export interface Name {
  name: string
  language: Language3
}

export interface Language3 {
  name: string
  url: string
}

export interface Sprites {
  default: string
}
