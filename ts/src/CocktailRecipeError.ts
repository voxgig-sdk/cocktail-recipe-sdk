
import { Context } from './Context'


class CocktailRecipeError extends Error {

  isCocktailRecipeError = true

  sdk = 'CocktailRecipe'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  CocktailRecipeError
}

