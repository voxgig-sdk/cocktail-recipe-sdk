# CocktailRecipe SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CocktailRecipeFeatures
  def self.make_feature(name)
    case name
    when "base"
      CocktailRecipeBaseFeature.new
    when "ratelimit"
      CocktailRecipeRatelimitFeature.new
    when "retry"
      CocktailRecipeRetryFeature.new
    when "test"
      CocktailRecipeTestFeature.new
    when "timeout"
      CocktailRecipeTimeoutFeature.new
    else
      CocktailRecipeBaseFeature.new
    end
  end
end
