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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('SearchEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('COCKTAIL_RECIPE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CocktailRecipeSDK.test();
        const ent = testsdk.Search();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'search.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "drinks", "req": false, "type": "`$ARRAY`", "index$": 0 }, { "active": true, "name": "ingredients", "req": false, "type": "`$ARRAY`", "index$": 1 }], "name": "search", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "a", "kind": "query", "name": "f", "orig": "f", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "vodka", "kind": "query", "name": "i", "orig": "i", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "margarita", "kind": "query", "name": "s", "orig": "s", "reqd": false, "type": "`$STRING`", "index$": 2 }] }, "contract": { "id": "GET /search.php", "json": "{\"operationId\":\"searchCocktails\",\"parameters\":[{\"description\":\"Search cocktail by name\",\"in\":\"query\",\"name\":\"s\",\"required\":false,\"schema\":{\"example\":\"margarita\",\"type\":\"string\"}},{\"description\":\"List all cocktails by first letter\",\"in\":\"query\",\"name\":\"f\",\"required\":false,\"schema\":{\"example\":\"a\",\"maxLength\":1,\"minLength\":1,\"type\":\"string\"}},{\"description\":\"Search ingredient by name\",\"in\":\"query\",\"name\":\"i\",\"required\":false,\"schema\":{\"example\":\"vodka\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"drinks\":{\"items\":{\"properties\":{\"dateModified\":{\"format\":\"date-time\",\"nullable\":true,\"type\":\"string\"},\"idDrink\":{\"description\":\"Unique drink ID\",\"type\":\"string\"},\"strAlcoholic\":{\"description\":\"Alcoholic or Non-Alcoholic\",\"type\":\"string\"},\"strCategory\":{\"description\":\"Drink category\",\"type\":\"string\"},\"strDrink\":{\"description\":\"Drink name\",\"type\":\"string\"},\"strDrinkAlternate\":{\"nullable\":true,\"type\":\"string\"},\"strDrinkThumb\":{\"description\":\"URL to drink thumbnail image\",\"type\":\"string\"},\"strGlass\":{\"description\":\"Type of glass\",\"type\":\"string\"},\"strIBA\":{\"nullable\":true,\"type\":\"string\"},\"strIngredient1\":{\"nullable\":true,\"type\":\"string\"},\"strIngredient2\":{\"nullable\":true,\"type\":\"string\"},\"strIngredient3\":{\"nullable\":true,\"type\":\"string\"},\"strInstructions\":{\"description\":\"Recipe instructions\",\"type\":\"string\"},\"strMeasure1\":{\"nullable\":true,\"type\":\"string\"},\"strMeasure2\":{\"nullable\":true,\"type\":\"string\"},\"strMeasure3\":{\"nullable\":true,\"type\":\"string\"},\"strTags\":{\"nullable\":true,\"type\":\"string\"},\"strVideo\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"ingredients\":{\"items\":{\"properties\":{\"idIngredient\":{\"type\":\"string\"},\"strABV\":{\"nullable\":true,\"type\":\"string\"},\"strAlcohol\":{\"nullable\":true,\"type\":\"string\"},\"strDescription\":{\"nullable\":true,\"type\":\"string\"},\"strIngredient\":{\"type\":\"string\"},\"strType\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySchemes\":{\"premiumApiKey\":{\"description\":\"Premium API key for production use. Test key '1' can be used for development.\",\"in\":\"path\",\"name\":\"apiKey\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/search.php", "segments": [{ "lit": "search.php" }], "select": { "exist": ["f", "i", "s"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "search", "name__orig": "search", "Name": "Search", "name_": "search", "name-": "search", "NAME": "SEARCH", "index$": 4 }, { "active": true, "entity": "search", "key$": "BasicSearchFlow", "kind": "basic", "name": "BasicSearchFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "search_ref01" } }], "index$": 0 }] }, 'Search');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let search_ref01_data = Object.values(setup.data.existing.search)[0];
        // LIST
        const search_ref01_ent = client.Search();
        const search_ref01_match = {};
        const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/search/SearchTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CocktailRecipeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['search01', 'search02', 'search03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'COCKTAIL_RECIPE_TEST_SEARCH_ENTID': idmap,
        'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
        'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
        'COCKTAIL_RECIPE_APIKEY': '',
    });
    idmap = env['COCKTAIL_RECIPE_TEST_SEARCH_ENTID'];
    const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['COCKTAIL_RECIPE_TEST_SEARCH_ENTID'];
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
//# sourceMappingURL=SearchEntity.test.js.map