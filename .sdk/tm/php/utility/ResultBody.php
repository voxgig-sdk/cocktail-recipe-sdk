<?php
declare(strict_types=1);

// CocktailRecipe SDK utility: result_body

class CocktailRecipeResultBody
{
    public static function call(CocktailRecipeContext $ctx): ?CocktailRecipeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
