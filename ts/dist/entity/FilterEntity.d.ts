import { CocktailRecipeEntityBase } from '../CocktailRecipeEntityBase';
import type { CocktailRecipeSDK } from '../CocktailRecipeSDK';
import type { Control } from '../types';
import type { Filter, FilterListMatch } from '../CocktailRecipeTypes';
declare class FilterEntity extends CocktailRecipeEntityBase<Filter> {
    constructor(client: CocktailRecipeSDK, entopts: any);
    make(this: FilterEntity): FilterEntity;
    list(this: any, reqmatch?: FilterListMatch, ctrl?: Control): Promise<FilterEntity[]>;
}
export { FilterEntity };
