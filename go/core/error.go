package core

type CocktailRecipeError struct {
	IsCocktailRecipeError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCocktailRecipeError(code string, msg string, ctx *Context) *CocktailRecipeError {
	return &CocktailRecipeError{
		IsCocktailRecipeError: true,
		Sdk:              "CocktailRecipe",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CocktailRecipeError) Error() string {
	return e.Msg
}
