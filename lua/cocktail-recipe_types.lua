-- Typed models for the CocktailRecipe SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Filter
---@field idDrink? string
---@field strDrink? string
---@field strDrinkThumb? string

---@class FilterListMatch
---@field idDrink? string
---@field strDrink? string
---@field strDrinkThumb? string

---@class List
---@field drinks? table
---@field strAlcoholic? string
---@field strCategory? string
---@field strGlass? string
---@field strIngredient1? string

---@class ListListMatch
---@field drinks? table
---@field strAlcoholic? string
---@field strCategory? string
---@field strGlass? string
---@field strIngredient1? string

---@class Lookup
---@field drinks? table
---@field ingredients? table

---@class LookupListMatch
---@field drinks? table
---@field ingredients? table

---@class Random
---@field drinks? table
---@field idDrink? string
---@field strAlcoholic? string
---@field strCategory? string
---@field strDrink? string
---@field strDrinkThumb? string
---@field strGlass? string
---@field strIngredient1? string
---@field strIngredient2? string
---@field strInstructions? string
---@field strMeasure1? string
---@field strMeasure2? string

---@class RandomListMatch
---@field drinks? table
---@field idDrink? string
---@field strAlcoholic? string
---@field strCategory? string
---@field strDrink? string
---@field strDrinkThumb? string
---@field strGlass? string
---@field strIngredient1? string
---@field strIngredient2? string
---@field strInstructions? string
---@field strMeasure1? string
---@field strMeasure2? string

---@class Search
---@field drinks? table
---@field ingredients? table

---@class SearchListMatch
---@field drinks? table
---@field ingredients? table

local M = {}

return M
