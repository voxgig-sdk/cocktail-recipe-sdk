<?php
declare(strict_types=1);

// CocktailRecipe SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CocktailRecipeUtility::setRegistrar(function (CocktailRecipeUtility $u): void {
    $u->clean = [CocktailRecipeClean::class, 'call'];
    $u->done = [CocktailRecipeDone::class, 'call'];
    $u->make_error = [CocktailRecipeMakeError::class, 'call'];
    $u->feature_add = [CocktailRecipeFeatureAdd::class, 'call'];
    $u->feature_hook = [CocktailRecipeFeatureHook::class, 'call'];
    $u->feature_init = [CocktailRecipeFeatureInit::class, 'call'];
    $u->fetcher = [CocktailRecipeFetcher::class, 'call'];
    $u->make_fetch_def = [CocktailRecipeMakeFetchDef::class, 'call'];
    $u->make_context = [CocktailRecipeMakeContext::class, 'call'];
    $u->make_options = [CocktailRecipeMakeOptions::class, 'call'];
    $u->make_request = [CocktailRecipeMakeRequest::class, 'call'];
    $u->make_response = [CocktailRecipeMakeResponse::class, 'call'];
    $u->make_result = [CocktailRecipeMakeResult::class, 'call'];
    $u->make_point = [CocktailRecipeMakePoint::class, 'call'];
    $u->make_spec = [CocktailRecipeMakeSpec::class, 'call'];
    $u->make_url = [CocktailRecipeMakeUrl::class, 'call'];
    $u->param = [CocktailRecipeParam::class, 'call'];
    $u->prepare_auth = [CocktailRecipePrepareAuth::class, 'call'];
    $u->prepare_body = [CocktailRecipePrepareBody::class, 'call'];
    $u->prepare_headers = [CocktailRecipePrepareHeaders::class, 'call'];
    $u->prepare_method = [CocktailRecipePrepareMethod::class, 'call'];
    $u->prepare_params = [CocktailRecipePrepareParams::class, 'call'];
    $u->prepare_path = [CocktailRecipePreparePath::class, 'call'];
    $u->prepare_query = [CocktailRecipePrepareQuery::class, 'call'];
    $u->result_basic = [CocktailRecipeResultBasic::class, 'call'];
    $u->result_body = [CocktailRecipeResultBody::class, 'call'];
    $u->result_headers = [CocktailRecipeResultHeaders::class, 'call'];
    $u->transform_request = [CocktailRecipeTransformRequest::class, 'call'];
    $u->transform_response = [CocktailRecipeTransformResponse::class, 'call'];
});
