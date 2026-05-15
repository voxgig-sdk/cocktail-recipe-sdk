-- CocktailRecipe SDK error

local CocktailRecipeError = {}
CocktailRecipeError.__index = CocktailRecipeError


function CocktailRecipeError.new(code, msg, ctx)
  local self = setmetatable({}, CocktailRecipeError)
  self.is_sdk_error = true
  self.sdk = "CocktailRecipe"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CocktailRecipeError:error()
  return self.msg
end


function CocktailRecipeError:__tostring()
  return self.msg
end


return CocktailRecipeError
