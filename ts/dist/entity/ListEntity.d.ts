import { CocktailRecipeEntityBase } from '../CocktailRecipeEntityBase';
import type { CocktailRecipeSDK } from '../CocktailRecipeSDK';
import type { Control } from '../types';
import type { List, ListListMatch } from '../CocktailRecipeTypes';
declare class ListEntity extends CocktailRecipeEntityBase<List> {
    constructor(client: CocktailRecipeSDK, entopts: any);
    make(this: ListEntity): ListEntity;
    list(this: any, reqmatch?: ListListMatch, ctrl?: Control): Promise<ListEntity[]>;
}
export { ListEntity };
