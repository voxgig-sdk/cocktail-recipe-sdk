<?php
declare(strict_types=1);

// CocktailRecipe SDK utility: result_headers

class CocktailRecipeResultHeaders
{
    public static function call(CocktailRecipeContext $ctx): ?CocktailRecipeResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
