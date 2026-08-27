// Typed models for the CocktailRecipe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Filter {
  idDrink?: string
  strDrink?: string
  strDrinkThumb?: string
}

export interface FilterListMatch {
  a?: string
  c?: string
  g?: string
  i?: string
}

export interface List {
  drinks?: any[]
  strAlcoholic?: string
  strCategory?: string
  strGlass?: string
  strIngredient1?: string
}

export interface ListListMatch {
  a?: string
  c?: string
  g?: string
  i?: string
}

export interface Lookup {
  drinks?: any[]
  ingredients?: any[]
}

export interface LookupListMatch {
  i?: string
  iid?: string
}

export interface Random {
  drinks?: any[]
  idDrink?: string
  strAlcoholic?: string
  strCategory?: string
  strDrink?: string
  strDrinkThumb?: string
  strGlass?: string
  strIngredient1?: string
  strIngredient2?: string
  strInstructions?: string
  strMeasure1?: string
  strMeasure2?: string
}

export interface RandomListMatch {
  drinks?: any[]
  idDrink?: string
  strAlcoholic?: string
  strCategory?: string
  strDrink?: string
  strDrinkThumb?: string
  strGlass?: string
  strIngredient1?: string
  strIngredient2?: string
  strInstructions?: string
  strMeasure1?: string
  strMeasure2?: string
}

export interface Search {
  drinks?: any[]
  ingredients?: any[]
}

export interface SearchListMatch {
  f?: string
  i?: string
  s?: string
}

