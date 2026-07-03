package voxgigcocktailrecipesdk

import (
	"github.com/voxgig-sdk/cocktail-recipe-sdk/go/core"
	"github.com/voxgig-sdk/cocktail-recipe-sdk/go/entity"
	"github.com/voxgig-sdk/cocktail-recipe-sdk/go/feature"
	_ "github.com/voxgig-sdk/cocktail-recipe-sdk/go/utility"
)

// Type aliases preserve external API.
type CocktailRecipeSDK = core.CocktailRecipeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CocktailRecipeEntity = core.CocktailRecipeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CocktailRecipeError = core.CocktailRecipeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewFilterEntityFunc = func(client *core.CocktailRecipeSDK, entopts map[string]any) core.CocktailRecipeEntity {
		return entity.NewFilterEntity(client, entopts)
	}
	core.NewListEntityFunc = func(client *core.CocktailRecipeSDK, entopts map[string]any) core.CocktailRecipeEntity {
		return entity.NewListEntity(client, entopts)
	}
	core.NewLookupEntityFunc = func(client *core.CocktailRecipeSDK, entopts map[string]any) core.CocktailRecipeEntity {
		return entity.NewLookupEntity(client, entopts)
	}
	core.NewRandomEntityFunc = func(client *core.CocktailRecipeSDK, entopts map[string]any) core.CocktailRecipeEntity {
		return entity.NewRandomEntity(client, entopts)
	}
	core.NewSearchEntityFunc = func(client *core.CocktailRecipeSDK, entopts map[string]any) core.CocktailRecipeEntity {
		return entity.NewSearchEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCocktailRecipeSDK = core.NewCocktailRecipeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCocktailRecipeSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CocktailRecipeSDK  { return NewCocktailRecipeSDK(nil) }
func Test() *CocktailRecipeSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
