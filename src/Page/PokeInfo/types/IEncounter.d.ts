export interface IEncounter {
  location_area: LocationArea
  version_details: VersionDetail[]
}

export interface LocationArea {
  name: string
  url: string
}

export interface VersionDetail {
  version: Version
  max_chance: number
  encounter_details: EncounterDetail[]
}

export interface Version {
  name: string
  url: string
}

export interface EncounterDetail {
  min_level: number
  max_level: number
  chance: number
  method: Method
  condition_values: ConditionValue[]
  pokemon_details?: PokemonDetails
}

export interface Method {
  name: string
  url: string
}

export interface ConditionValue {
  name: string
  url: string
}

export interface PokemonDetails {
  min_perfect_ivs: any
  always_shiny: boolean
  never_shiny: boolean
  is_alpha: boolean
}
