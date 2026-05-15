# CocktailRecipe SDK utility: make_context
require_relative '../core/context'
module CocktailRecipeUtilities
  MakeContext = ->(ctxmap, basectx) {
    CocktailRecipeContext.new(ctxmap, basectx)
  }
end
