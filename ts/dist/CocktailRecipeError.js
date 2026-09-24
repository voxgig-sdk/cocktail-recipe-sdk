"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocktailRecipeError = void 0;
class CocktailRecipeError extends Error {
    isCocktailRecipeError = true;
    sdk = 'CocktailRecipe';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CocktailRecipeError = CocktailRecipeError;
//# sourceMappingURL=CocktailRecipeError.js.map