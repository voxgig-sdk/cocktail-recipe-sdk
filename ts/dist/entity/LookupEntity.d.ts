import { CocktailRecipeEntityBase } from '../CocktailRecipeEntityBase';
import type { CocktailRecipeSDK } from '../CocktailRecipeSDK';
import type { Control } from '../types';
import type { Lookup, LookupListMatch } from '../CocktailRecipeTypes';
declare class LookupEntity extends CocktailRecipeEntityBase<Lookup> {
    constructor(client: CocktailRecipeSDK, entopts: any);
    make(this: LookupEntity): LookupEntity;
    list(this: any, reqmatch?: LookupListMatch, ctrl?: Control): Promise<LookupEntity[]>;
}
export { LookupEntity };
