# CocktailRecipe SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CocktailRecipeUtility.registrar = ->(u) {
  u.clean = CocktailRecipeUtilities::Clean
  u.done = CocktailRecipeUtilities::Done
  u.make_error = CocktailRecipeUtilities::MakeError
  u.feature_add = CocktailRecipeUtilities::FeatureAdd
  u.feature_hook = CocktailRecipeUtilities::FeatureHook
  u.feature_init = CocktailRecipeUtilities::FeatureInit
  u.fetcher = CocktailRecipeUtilities::Fetcher
  u.make_fetch_def = CocktailRecipeUtilities::MakeFetchDef
  u.make_context = CocktailRecipeUtilities::MakeContext
  u.make_options = CocktailRecipeUtilities::MakeOptions
  u.make_request = CocktailRecipeUtilities::MakeRequest
  u.make_response = CocktailRecipeUtilities::MakeResponse
  u.make_result = CocktailRecipeUtilities::MakeResult
  u.make_point = CocktailRecipeUtilities::MakePoint
  u.make_spec = CocktailRecipeUtilities::MakeSpec
  u.make_url = CocktailRecipeUtilities::MakeUrl
  u.param = CocktailRecipeUtilities::Param
  u.prepare_auth = CocktailRecipeUtilities::PrepareAuth
  u.prepare_body = CocktailRecipeUtilities::PrepareBody
  u.prepare_headers = CocktailRecipeUtilities::PrepareHeaders
  u.prepare_method = CocktailRecipeUtilities::PrepareMethod
  u.prepare_params = CocktailRecipeUtilities::PrepareParams
  u.prepare_path = CocktailRecipeUtilities::PreparePath
  u.prepare_query = CocktailRecipeUtilities::PrepareQuery
  u.result_basic = CocktailRecipeUtilities::ResultBasic
  u.result_body = CocktailRecipeUtilities::ResultBody
  u.result_headers = CocktailRecipeUtilities::ResultHeaders
  u.transform_request = CocktailRecipeUtilities::TransformRequest
  u.transform_response = CocktailRecipeUtilities::TransformResponse
}
