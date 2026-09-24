"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RandomEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('COCKTAIL_RECIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CocktailRecipeSDK.test();
        const ent = testsdk.Random();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'random.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "drinks": { "a": true, "h": "Drinks", "n": "drinks", "r": false, "t": "`$ARRAY`", "key$": "drinks", "index$": 0 }, "idDrink": { "a": true, "h": "Id Drink", "n": "idDrink", "r": false, "t": "`$STRING`", "key$": "idDrink", "index$": 1 }, "strAlcoholic": { "a": true, "h": "Str Alcoholic", "n": "strAlcoholic", "r": false, "t": "`$STRING`", "key$": "strAlcoholic", "index$": 2 }, "strCategory": { "a": true, "h": "Str Category", "n": "strCategory", "r": false, "t": "`$STRING`", "key$": "strCategory", "index$": 3 }, "strDrink": { "a": true, "h": "Str Drink", "n": "strDrink", "r": false, "t": "`$STRING`", "key$": "strDrink", "index$": 4 }, "strDrinkThumb": { "a": true, "h": "Str Drink Thumb", "n": "strDrinkThumb", "r": false, "t": "`$STRING`", "key$": "strDrinkThumb", "index$": 5 }, "strGlass": { "a": true, "h": "Str Glass", "n": "strGlass", "r": false, "t": "`$STRING`", "key$": "strGlass", "index$": 6 }, "strIngredient1": { "a": true, "h": "Str Ingredient1", "n": "strIngredient1", "r": false, "t": "`$STRING`", "key$": "strIngredient1", "index$": 7 }, "strIngredient2": { "a": true, "h": "Str Ingredient2", "n": "strIngredient2", "r": false, "t": "`$STRING`", "key$": "strIngredient2", "index$": 8 }, "strInstructions": { "a": true, "h": "Str Instructions", "n": "strInstructions", "r": false, "t": "`$STRING`", "key$": "strInstructions", "index$": 9 }, "strMeasure1": { "a": true, "h": "Str Measure1", "n": "strMeasure1", "r": false, "t": "`$STRING`", "key$": "strMeasure1", "index$": 10 }, "strMeasure2": { "a": true, "h": "Str Measure2", "n": "strMeasure2", "r": false, "t": "`$STRING`", "key$": "strMeasure2", "index$": 11 } }, "name": "random", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /random.php", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/random.php", "q": {}, "r": {}, "s": [{ "lit": "random.php" }], "t": { "req": "`reqdata`", "res": "`body.drinks`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /randomselection.php", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/randomselection.php", "q": {}, "r": {}, "s": [{ "lit": "randomselection.php" }], "t": { "req": "`reqdata`", "res": "`body.drinks`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "random", "name__orig": "random", "Name": "Random", "name_": "random", "name-": "random", "NAME": "RANDOM", "index$": 3 }, { "active": true, "entity": "random", "key$": "BasicRandomFlow", "kind": "basic", "name": "BasicRandomFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "random_ref01" } }], "index$": 0 }] }, 'Random', { "GET /random.php": { "protocol": "http", "operationId": "getRandomCocktail", "responses": { "200": { "description": "Successful response with random cocktail", "content": { "application/json": { "schema": { "type": "object", "properties": { "drinks": { "items": { "properties": { "idDrink": { "type": "string", "key$": "idDrink" }, "strAlcoholic": { "type": "string", "key$": "strAlcoholic" }, "strCategory": { "type": "string", "key$": "strCategory" }, "strDrink": { "type": "string", "key$": "strDrink" }, "strDrinkThumb": { "type": "string", "key$": "strDrinkThumb" }, "strGlass": { "type": "string", "key$": "strGlass" }, "strIngredient1": { "nullable": true, "type": "string", "key$": "strIngredient1" }, "strIngredient2": { "nullable": true, "type": "string", "key$": "strIngredient2" }, "strInstructions": { "type": "string", "key$": "strInstructions" }, "strMeasure1": { "nullable": true, "type": "string", "key$": "strMeasure1" }, "strMeasure2": { "nullable": true, "type": "string", "key$": "strMeasure2" } }, "type": "object", "index$": 0 }, "key$": "drinks", "maxItems": 1, "type": "array" } } } } } } }, "parameters": [], "securitySource": "unspecified", "securitySchemes": { "premiumApiKey": { "type": "apiKey", "in": "path", "name": "apiKey", "description": "Premium API key for production use. Test key '1' can be used for development." } } }, "GET /randomselection.php": { "protocol": "http", "operationId": "getRandomSelection", "responses": { "200": { "description": "Successful response with 10 random cocktails", "content": { "application/json": { "schema": { "type": "object", "properties": { "drinks": { "items": { "type": "object" }, "key$": "drinks", "maxItems": 10, "type": "array" } }, "index$": 0 } } } }, "401": { "description": "Unauthorized - Premium API key required" } }, "parameters": [], "security": [{ "premiumApiKey": [] }], "securitySource": "operation", "securitySchemes": { "premiumApiKey": { "type": "apiKey", "in": "path", "name": "apiKey", "description": "Premium API key for production use. Test key '1' can be used for development." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let random_ref01_data = Object.values(setup.data.existing.random)[0];
        // LIST
        const random_ref01_ent = client.Random();
        const random_ref01_match = {};
        const random_ref01_list = (await random_ref01_ent.list(random_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/random/RandomTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CocktailRecipeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['random01', 'random02', 'random03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'COCKTAIL_RECIPE_TEST_RANDOM_ENTID': idmap,
        'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
        'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
        'COCKTAIL_RECIPE_APIKEY': '',
    });
    idmap = env['COCKTAIL_RECIPE_TEST_RANDOM_ENTID'];
    const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['COCKTAIL_RECIPE_TEST_RANDOM_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CocktailRecipeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.COCKTAIL_RECIPE_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.COCKTAIL_RECIPE_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=RandomEntity.test.js.map