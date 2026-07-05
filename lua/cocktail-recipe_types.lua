-- Typed models for the CocktailRecipe SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Filter
---@field id_drink? string
---@field str_drink? string
---@field str_drink_thumb? string

---@class FilterListMatch
---@field id_drink? string
---@field str_drink? string
---@field str_drink_thumb? string

---@class List
---@field drink? table
---@field str_alcoholic? string
---@field str_category? string
---@field str_glass? string
---@field str_ingredient1? string

---@class ListListMatch
---@field drink? table
---@field str_alcoholic? string
---@field str_category? string
---@field str_glass? string
---@field str_ingredient1? string

---@class Lookup
---@field drink? table
---@field ingredient? table

---@class LookupListMatch
---@field drink? table
---@field ingredient? table

---@class Random
---@field drink? table
---@field id_drink? string
---@field str_alcoholic? string
---@field str_category? string
---@field str_drink? string
---@field str_drink_thumb? string
---@field str_glass? string
---@field str_ingredient1? string
---@field str_ingredient2? string
---@field str_instruction? string
---@field str_measure1? string
---@field str_measure2? string

---@class RandomListMatch
---@field drink? table
---@field id_drink? string
---@field str_alcoholic? string
---@field str_category? string
---@field str_drink? string
---@field str_drink_thumb? string
---@field str_glass? string
---@field str_ingredient1? string
---@field str_ingredient2? string
---@field str_instruction? string
---@field str_measure1? string
---@field str_measure2? string

---@class Search
---@field drink? table
---@field ingredient? table

---@class SearchListMatch
---@field drink? table
---@field ingredient? table

local M = {}

return M
