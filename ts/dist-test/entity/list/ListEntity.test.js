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
(0, node_test_1.describe)('ListEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('COCKTAIL_RECIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CocktailRecipeSDK.test();
        const ent = testsdk.List();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'list.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "drinks": { "a": true, "h": "Drinks", "n": "drinks", "r": false, "t": "`$ARRAY`", "key$": "drinks", "index$": 0 }, "strAlcoholic": { "a": true, "h": "Str Alcoholic", "n": "strAlcoholic", "r": false, "t": "`$STRING`", "key$": "strAlcoholic", "index$": 1 }, "strCategory": { "a": true, "h": "Str Category", "n": "strCategory", "r": false, "t": "`$STRING`", "key$": "strCategory", "index$": 2 }, "strGlass": { "a": true, "h": "Str Glass", "n": "strGlass", "r": false, "t": "`$STRING`", "key$": "strGlass", "index$": 3 }, "strIngredient1": { "a": true, "h": "Str Ingredient1", "n": "strIngredient1", "r": false, "t": "`$STRING`", "key$": "strIngredient1", "index$": 4 } }, "name": "list", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /list.php", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "list", "k": "query", "n": "a", "or": "a", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "list", "k": "query", "n": "c", "or": "c", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "list", "k": "query", "n": "g", "or": "g", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "list", "k": "query", "n": "i", "or": "i", "r": false, "t": "`$STRING`", "index$": 3 }] }, "k": "http", "m": "GET", "o": "/list.php", "q": { "exist": ["a", "c", "g", "i"] }, "r": {}, "s": [{ "lit": "list.php" }], "t": { "req": "`reqdata`", "res": "`body.drinks`" }, "index$": 0 }, { "a": true, "co": { "id": "GET /latest.php", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/latest.php", "q": {}, "r": {}, "s": [{ "lit": "latest.php" }], "t": { "req": "`reqdata`", "res": "`body.drinks`" }, "index$": 1 }, { "a": true, "co": { "id": "GET /popular.php", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/popular.php", "q": {}, "r": {}, "s": [{ "lit": "popular.php" }], "t": { "req": "`reqdata`", "res": "`body.drinks`" }, "index$": 2 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "list", "name__orig": "list", "Name": "List", "name_": "list", "name-": "list", "NAME": "LIST", "index$": 1 }, { "active": true, "entity": "list", "key$": "BasicListFlow", "kind": "basic", "name": "BasicListFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "list_ref01" } }], "index$": 0 }] }, 'List', { "GET /list.php": { "protocol": "http", "operationId": "listFilters", "responses": { "200": { "description": "Successful response with list of filters", "content": { "application/json": { "schema": { "type": "object", "properties": { "drinks": { "items": { "properties": { "strAlcoholic": { "type": "string", "key$": "strAlcoholic" }, "strCategory": { "type": "string", "key$": "strCategory" }, "strGlass": { "type": "string", "key$": "strGlass" }, "strIngredient1": { "type": "string", "key$": "strIngredient1" } }, "type": "object", "index$": 0 }, "key$": "drinks", "type": "array" } } } } } } }, "parameters": [{ "name": "c", "in": "query", "description": "List categories", "required": false, "schema": { "type": "string", "enum": ["list"], "example": "list" }, "index$": 0 }, { "name": "g", "in": "query", "description": "List glass types", "required": false, "schema": { "type": "string", "enum": ["list"], "example": "list" }, "index$": 1 }, { "name": "i", "in": "query", "description": "List ingredients", "required": false, "schema": { "type": "string", "enum": ["list"], "example": "list" }, "index$": 2 }, { "name": "a", "in": "query", "description": "List alcoholic filters", "required": false, "schema": { "type": "string", "enum": ["list"], "example": "list" }, "index$": 3 }], "securitySource": "unspecified", "securitySchemes": { "premiumApiKey": { "type": "apiKey", "in": "path", "name": "apiKey", "description": "Premium API key for production use. Test key '1' can be used for development." } } }, "GET /latest.php": { "protocol": "http", "operationId": "getLatestCocktails", "responses": { "200": { "description": "Successful response with latest cocktails", "content": { "application/json": { "schema": { "type": "object", "properties": { "drinks": { "items": { "type": "object" }, "key$": "drinks", "type": "array" } }, "index$": 0 } } } }, "401": { "description": "Unauthorized - Premium API key required" } }, "parameters": [], "security": [{ "premiumApiKey": [] }], "securitySource": "operation", "securitySchemes": { "premiumApiKey": { "type": "apiKey", "in": "path", "name": "apiKey", "description": "Premium API key for production use. Test key '1' can be used for development." } } }, "GET /popular.php": { "protocol": "http", "operationId": "getPopularCocktails", "responses": { "200": { "description": "Successful response with popular cocktails", "content": { "application/json": { "schema": { "type": "object", "properties": { "drinks": { "items": { "type": "object" }, "key$": "drinks", "type": "array" } }, "index$": 0 } } } }, "401": { "description": "Unauthorized - Premium API key required" } }, "parameters": [], "security": [{ "premiumApiKey": [] }], "securitySource": "operation", "securitySchemes": { "premiumApiKey": { "type": "apiKey", "in": "path", "name": "apiKey", "description": "Premium API key for production use. Test key '1' can be used for development." } } } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let list_ref01_data = Object.values(setup.data.existing.list)[0];
        // LIST
        const list_ref01_ent = client.List();
        const list_ref01_match = {};
        const list_ref01_list = (await list_ref01_ent.list(list_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/list/ListTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CocktailRecipeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['list01', 'list02', 'list03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'COCKTAIL_RECIPE_TEST_LIST_ENTID': idmap,
        'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
        'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
        'COCKTAIL_RECIPE_APIKEY': '',
    });
    idmap = env['COCKTAIL_RECIPE_TEST_LIST_ENTID'];
    const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['COCKTAIL_RECIPE_TEST_LIST_ENTID'];
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
//# sourceMappingURL=ListEntity.test.js.map