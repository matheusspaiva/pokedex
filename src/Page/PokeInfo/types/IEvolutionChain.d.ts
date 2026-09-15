export interface IEvolutionChain {
  id: number
  baby_trigger_item: any
  chain: Chain
}

export interface Chain {
  is_baby: boolean
  species: Species
  evolution_details: any[]
  evolves_to: EvolvesTo[]
}

export interface Species {
  name: string
  url: string
}

export interface EvolvesTo {
  is_baby: boolean
  species: Species2
  evolution_details: EvolutionDetail[]
  evolves_to: any[]
}

export interface Species2 {
  name: string
  url: string
}

export interface EvolutionDetail {
  version_group: VersionGroup
  is_default: boolean
  item?: Item
  trigger: Trigger
  gender: any
  held_item: any
  known_move: any
  known_move_type?: KnownMoveType
  location?: Location
  min_level: any
  min_happiness?: number
  min_beauty: any
  min_affection?: number
  near_special_rock: boolean
  needs_multiplayer: boolean
  needs_overworld_rain: boolean
  party_species: any
  party_type: any
  relative_physical_stats: any
  time_of_day: string
  trade_species: any
  turn_upside_down: boolean
  region: any
  base_form: BaseForm
  evolved_form: any
  used_move: any
  min_move_count: any
  min_steps: any
  min_damage_taken: any
}

export interface VersionGroup {
  name: string
  url: string
}

export interface Item {
  name: string
  url: string
}

export interface Trigger {
  name: string
  url: string
}

export interface KnownMoveType {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}

export interface BaseForm {
  name: string
  url: string
}
