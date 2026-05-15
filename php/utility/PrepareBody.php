<?php
declare(strict_types=1);

// CocktailRecipe SDK utility: prepare_body

class CocktailRecipePrepareBody
{
    public static function call(CocktailRecipeContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
