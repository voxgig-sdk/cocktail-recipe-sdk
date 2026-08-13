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
# @!attribute [rw] idDrink
#   @return [String, nil]
#
# @!attribute [rw] strDrink
#   @return [String, nil]
#
# @!attribute [rw] strDrinkThumb
#   @return [String, nil]
Filter = Struct.new(
  :idDrink,
  :strDrink,
  :strDrinkThumb,
  keyword_init: true
)

# Request payload for Filter#list.
#
# @!attribute [rw] idDrink
#   @return [String, nil]
#
# @!attribute [rw] strDrink
#   @return [String, nil]
#
# @!attribute [rw] strDrinkThumb
#   @return [String, nil]
FilterListMatch = Struct.new(
  :idDrink,
  :strDrink,
  :strDrinkThumb,
  keyword_init: true
)

# List entity data model.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] strAlcoholic
#   @return [String, nil]
#
# @!attribute [rw] strCategory
#   @return [String, nil]
#
# @!attribute [rw] strGlass
#   @return [String, nil]
#
# @!attribute [rw] strIngredient1
#   @return [String, nil]
List = Struct.new(
  :drinks,
  :strAlcoholic,
  :strCategory,
  :strGlass,
  :strIngredient1,
  keyword_init: true
)

# Request payload for List#list.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] strAlcoholic
#   @return [String, nil]
#
# @!attribute [rw] strCategory
#   @return [String, nil]
#
# @!attribute [rw] strGlass
#   @return [String, nil]
#
# @!attribute [rw] strIngredient1
#   @return [String, nil]
ListListMatch = Struct.new(
  :drinks,
  :strAlcoholic,
  :strCategory,
  :strGlass,
  :strIngredient1,
  keyword_init: true
)

# Lookup entity data model.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
Lookup = Struct.new(
  :drinks,
  :ingredients,
  keyword_init: true
)

# Request payload for Lookup#list.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
LookupListMatch = Struct.new(
  :drinks,
  :ingredients,
  keyword_init: true
)

# Random entity data model.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] idDrink
#   @return [String, nil]
#
# @!attribute [rw] strAlcoholic
#   @return [String, nil]
#
# @!attribute [rw] strCategory
#   @return [String, nil]
#
# @!attribute [rw] strDrink
#   @return [String, nil]
#
# @!attribute [rw] strDrinkThumb
#   @return [String, nil]
#
# @!attribute [rw] strGlass
#   @return [String, nil]
#
# @!attribute [rw] strIngredient1
#   @return [String, nil]
#
# @!attribute [rw] strIngredient2
#   @return [String, nil]
#
# @!attribute [rw] strInstructions
#   @return [String, nil]
#
# @!attribute [rw] strMeasure1
#   @return [String, nil]
#
# @!attribute [rw] strMeasure2
#   @return [String, nil]
RandomType = Struct.new(
  :drinks,
  :idDrink,
  :strAlcoholic,
  :strCategory,
  :strDrink,
  :strDrinkThumb,
  :strGlass,
  :strIngredient1,
  :strIngredient2,
  :strInstructions,
  :strMeasure1,
  :strMeasure2,
  keyword_init: true
)

# Request payload for Random#list.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] idDrink
#   @return [String, nil]
#
# @!attribute [rw] strAlcoholic
#   @return [String, nil]
#
# @!attribute [rw] strCategory
#   @return [String, nil]
#
# @!attribute [rw] strDrink
#   @return [String, nil]
#
# @!attribute [rw] strDrinkThumb
#   @return [String, nil]
#
# @!attribute [rw] strGlass
#   @return [String, nil]
#
# @!attribute [rw] strIngredient1
#   @return [String, nil]
#
# @!attribute [rw] strIngredient2
#   @return [String, nil]
#
# @!attribute [rw] strInstructions
#   @return [String, nil]
#
# @!attribute [rw] strMeasure1
#   @return [String, nil]
#
# @!attribute [rw] strMeasure2
#   @return [String, nil]
RandomListMatch = Struct.new(
  :drinks,
  :idDrink,
  :strAlcoholic,
  :strCategory,
  :strDrink,
  :strDrinkThumb,
  :strGlass,
  :strIngredient1,
  :strIngredient2,
  :strInstructions,
  :strMeasure1,
  :strMeasure2,
  keyword_init: true
)

# Search entity data model.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
Search = Struct.new(
  :drinks,
  :ingredients,
  keyword_init: true
)

# Request payload for Search#list.
#
# @!attribute [rw] drinks
#   @return [Array, nil]
#
# @!attribute [rw] ingredients
#   @return [Array, nil]
SearchListMatch = Struct.new(
  :drinks,
  :ingredients,
  keyword_init: true
)

