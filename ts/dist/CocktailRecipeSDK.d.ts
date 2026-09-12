import { FilterEntity } from './entity/FilterEntity';
import { ListEntity } from './entity/ListEntity';
import { LookupEntity } from './entity/LookupEntity';
import { RandomEntity } from './entity/RandomEntity';
import { SearchEntity } from './entity/SearchEntity';
export type * from './CocktailRecipeTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { CocktailRecipeEntityBase } from './CocktailRecipeEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class CocktailRecipeSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Filter(entopts?: Record<string, any>): FilterEntity;
    List(entopts?: Record<string, any>): ListEntity;
    Lookup(entopts?: Record<string, any>): LookupEntity;
    Random(entopts?: Record<string, any>): RandomEntity;
    Search(entopts?: Record<string, any>): SearchEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): CocktailRecipeSDK;
    tester(testopts?: any, sdkopts?: any): CocktailRecipeSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof CocktailRecipeSDK;
export { stdutil, config, BaseFeature, CocktailRecipeEntityBase, CocktailRecipeSDK, SDK, };
