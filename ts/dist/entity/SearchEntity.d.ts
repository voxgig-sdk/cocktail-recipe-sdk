import { CocktailRecipeEntityBase } from '../CocktailRecipeEntityBase';
import type { CocktailRecipeSDK } from '../CocktailRecipeSDK';
import type { Control } from '../types';
import type { Search, SearchListMatch } from '../CocktailRecipeTypes';
declare class SearchEntity extends CocktailRecipeEntityBase<Search> {
    constructor(client: CocktailRecipeSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    list(this: any, reqmatch?: SearchListMatch, ctrl?: Control): Promise<SearchEntity[]>;
}
export { SearchEntity };
