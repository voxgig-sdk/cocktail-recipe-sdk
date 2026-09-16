package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewFilterEntityFunc func(client *CocktailRecipeSDK, entopts map[string]any) CocktailRecipeEntity

var NewListEntityFunc func(client *CocktailRecipeSDK, entopts map[string]any) CocktailRecipeEntity

var NewLookupEntityFunc func(client *CocktailRecipeSDK, entopts map[string]any) CocktailRecipeEntity

var NewRandomEntityFunc func(client *CocktailRecipeSDK, entopts map[string]any) CocktailRecipeEntity

var NewSearchEntityFunc func(client *CocktailRecipeSDK, entopts map[string]any) CocktailRecipeEntity

