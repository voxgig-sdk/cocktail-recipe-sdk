// Typed models for the CocktailRecipe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Filter {
  id_drink?: string
  str_drink?: string
  str_drink_thumb?: string
}

export type FilterListMatch = Partial<Filter>

export interface List {
  drink?: any[]
  str_alcoholic?: string
  str_category?: string
  str_glass?: string
  str_ingredient1?: string
}

export type ListListMatch = Partial<List>

export interface Lookup {
  drink?: any[]
  ingredient?: any[]
}

export type LookupListMatch = Partial<Lookup>

export interface Random {
  drink?: any[]
  id_drink?: string
  str_alcoholic?: string
  str_category?: string
  str_drink?: string
  str_drink_thumb?: string
  str_glass?: string
  str_ingredient1?: string
  str_ingredient2?: string
  str_instruction?: string
  str_measure1?: string
  str_measure2?: string
}

export type RandomListMatch = Partial<Random>

export interface Search {
  drink?: any[]
  ingredient?: any[]
}

export type SearchListMatch = Partial<Search>

