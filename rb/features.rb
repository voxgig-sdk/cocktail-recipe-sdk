# CocktailRecipe SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CocktailRecipeFeatures
  def self.make_feature(name)
    case name
    when "base"
      CocktailRecipeBaseFeature.new
    when "test"
      CocktailRecipeTestFeature.new
    else
      CocktailRecipeBaseFeature.new
    end
  end
end
