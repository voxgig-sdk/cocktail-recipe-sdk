# frozen_string_literal: true

# Typed models for the CocktailRecipe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Filter entity data model.
#
# @!attribute [rw] id_drink
#   @return [String, nil]
#
# @!attribute [rw] str_drink
#   @return [String, nil]
#
# @!attribute [rw] str_drink_thumb
#   @return [String, nil]
Filter = Struct.new(
  :id_drink,
  :str_drink,
  :str_drink_thumb,
  keyword_init: true
)

# Request payload for Filter#list.
#
# @!attribute [rw] id_drink
#   @return [String, nil]
#
# @!attribute [rw] str_drink
#   @return [String, nil]
#
# @!attribute [rw] str_drink_thumb
#   @return [String, nil]
FilterListMatch = Struct.new(
  :id_drink,
  :str_drink,
  :str_drink_thumb,
  keyword_init: true
)

# List entity data model.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] str_alcoholic
#   @return [String, nil]
#
# @!attribute [rw] str_category
#   @return [String, nil]
#
# @!attribute [rw] str_glass
#   @return [String, nil]
#
# @!attribute [rw] str_ingredient1
#   @return [String, nil]
List = Struct.new(
  :drink,
  :str_alcoholic,
  :str_category,
  :str_glass,
  :str_ingredient1,
  keyword_init: true
)

# Request payload for List#list.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] str_alcoholic
#   @return [String, nil]
#
# @!attribute [rw] str_category
#   @return [String, nil]
#
# @!attribute [rw] str_glass
#   @return [String, nil]
#
# @!attribute [rw] str_ingredient1
#   @return [String, nil]
ListListMatch = Struct.new(
  :drink,
  :str_alcoholic,
  :str_category,
  :str_glass,
  :str_ingredient1,
  keyword_init: true
)

# Lookup entity data model.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] ingredient
#   @return [Array, nil]
Lookup = Struct.new(
  :drink,
  :ingredient,
  keyword_init: true
)

# Request payload for Lookup#list.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] ingredient
#   @return [Array, nil]
LookupListMatch = Struct.new(
  :drink,
  :ingredient,
  keyword_init: true
)

# Random entity data model.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] id_drink
#   @return [String, nil]
#
# @!attribute [rw] str_alcoholic
#   @return [String, nil]
#
# @!attribute [rw] str_category
#   @return [String, nil]
#
# @!attribute [rw] str_drink
#   @return [String, nil]
#
# @!attribute [rw] str_drink_thumb
#   @return [String, nil]
#
# @!attribute [rw] str_glass
#   @return [String, nil]
#
# @!attribute [rw] str_ingredient1
#   @return [String, nil]
#
# @!attribute [rw] str_ingredient2
#   @return [String, nil]
#
# @!attribute [rw] str_instruction
#   @return [String, nil]
#
# @!attribute [rw] str_measure1
#   @return [String, nil]
#
# @!attribute [rw] str_measure2
#   @return [String, nil]
Random = Struct.new(
  :drink,
  :id_drink,
  :str_alcoholic,
  :str_category,
  :str_drink,
  :str_drink_thumb,
  :str_glass,
  :str_ingredient1,
  :str_ingredient2,
  :str_instruction,
  :str_measure1,
  :str_measure2,
  keyword_init: true
)

# Request payload for Random#list.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] id_drink
#   @return [String, nil]
#
# @!attribute [rw] str_alcoholic
#   @return [String, nil]
#
# @!attribute [rw] str_category
#   @return [String, nil]
#
# @!attribute [rw] str_drink
#   @return [String, nil]
#
# @!attribute [rw] str_drink_thumb
#   @return [String, nil]
#
# @!attribute [rw] str_glass
#   @return [String, nil]
#
# @!attribute [rw] str_ingredient1
#   @return [String, nil]
#
# @!attribute [rw] str_ingredient2
#   @return [String, nil]
#
# @!attribute [rw] str_instruction
#   @return [String, nil]
#
# @!attribute [rw] str_measure1
#   @return [String, nil]
#
# @!attribute [rw] str_measure2
#   @return [String, nil]
RandomListMatch = Struct.new(
  :drink,
  :id_drink,
  :str_alcoholic,
  :str_category,
  :str_drink,
  :str_drink_thumb,
  :str_glass,
  :str_ingredient1,
  :str_ingredient2,
  :str_instruction,
  :str_measure1,
  :str_measure2,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] ingredient
#   @return [Array, nil]
Search = Struct.new(
  :drink,
  :ingredient,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] drink
#   @return [Array, nil]
#
# @!attribute [rw] ingredient
#   @return [Array, nil]
SearchListMatch = Struct.new(
  :drink,
  :ingredient,
  keyword_init: true
)

