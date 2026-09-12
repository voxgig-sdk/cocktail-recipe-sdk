import { CocktailRecipeEntityBase } from '../CocktailRecipeEntityBase';
import type { CocktailRecipeSDK } from '../CocktailRecipeSDK';
import type { Control } from '../types';
import type { Random, RandomListMatch } from '../CocktailRecipeTypes';
declare class RandomEntity extends CocktailRecipeEntityBase<Random> {
    constructor(client: CocktailRecipeSDK, entopts: any);
    make(this: RandomEntity): RandomEntity;
    list(this: any, reqmatch?: RandomListMatch, ctrl?: Control): Promise<RandomEntity[]>;
}
export { RandomEntity };
