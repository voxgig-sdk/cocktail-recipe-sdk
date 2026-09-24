

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CocktailRecipeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ListEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('COCKTAIL_RECIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CocktailRecipeSDK.test()
    const ent = testsdk.List()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"drinks":{"a":true,"h":"Drinks","n":"drinks","r":false,"t":"`$ARRAY`","key$":"drinks","index$":0},"strAlcoholic":{"a":true,"h":"Str Alcoholic","n":"strAlcoholic","r":false,"t":"`$STRING`","key$":"strAlcoholic","index$":1},"strCategory":{"a":true,"h":"Str Category","n":"strCategory","r":false,"t":"`$STRING`","key$":"strCategory","index$":2},"strGlass":{"a":true,"h":"Str Glass","n":"strGlass","r":false,"t":"`$STRING`","key$":"strGlass","index$":3},"strIngredient1":{"a":true,"h":"Str Ingredient1","n":"strIngredient1","r":false,"t":"`$STRING`","key$":"strIngredient1","index$":4}},"name":"list","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /list.php","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"list","k":"query","n":"a","or":"a","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"list","k":"query","n":"c","or":"c","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"list","k":"query","n":"g","or":"g","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"list","k":"query","n":"i","or":"i","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/list.php","q":{"exist":["a","c","g","i"]},"r":{},"s":[{"lit":"list.php"}],"t":{"req":"`reqdata`","res":"`body.drinks`"},"index$":0},{"a":true,"co":{"id":"GET /latest.php","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/latest.php","q":{},"r":{},"s":[{"lit":"latest.php"}],"t":{"req":"`reqdata`","res":"`body.drinks`"},"index$":1},{"a":true,"co":{"id":"GET /popular.php","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/popular.php","q":{},"r":{},"s":[{"lit":"popular.php"}],"t":{"req":"`reqdata`","res":"`body.drinks`"},"index$":2}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list","name__orig":"list","Name":"List","name_":"list","name-":"list","NAME":"LIST","index$":1}, {"active":true,"entity":"list","key$":"BasicListFlow","kind":"basic","name":"BasicListFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"list_ref01"}}],"index$":0}]}, 'List', {"GET /list.php":{"protocol":"http","operationId":"listFilters","responses":{"200":{"description":"Successful response with list of filters","content":{"application/json":{"schema":{"type":"object","properties":{"drinks":{"items":{"properties":{"strAlcoholic":{"type":"string","key$":"strAlcoholic"},"strCategory":{"type":"string","key$":"strCategory"},"strGlass":{"type":"string","key$":"strGlass"},"strIngredient1":{"type":"string","key$":"strIngredient1"}},"type":"object","index$":0},"key$":"drinks","type":"array"}}}}}}},"parameters":[{"name":"c","in":"query","description":"List categories","required":false,"schema":{"type":"string","enum":["list"],"example":"list"},"index$":0},{"name":"g","in":"query","description":"List glass types","required":false,"schema":{"type":"string","enum":["list"],"example":"list"},"index$":1},{"name":"i","in":"query","description":"List ingredients","required":false,"schema":{"type":"string","enum":["list"],"example":"list"},"index$":2},{"name":"a","in":"query","description":"List alcoholic filters","required":false,"schema":{"type":"string","enum":["list"],"example":"list"},"index$":3}],"securitySource":"unspecified","securitySchemes":{"premiumApiKey":{"type":"apiKey","in":"path","name":"apiKey","description":"Premium API key for production use. Test key '1' can be used for development."}}},"GET /latest.php":{"protocol":"http","operationId":"getLatestCocktails","responses":{"200":{"description":"Successful response with latest cocktails","content":{"application/json":{"schema":{"type":"object","properties":{"drinks":{"items":{"type":"object"},"key$":"drinks","type":"array"}},"index$":0}}}},"401":{"description":"Unauthorized - Premium API key required"}},"parameters":[],"security":[{"premiumApiKey":[]}],"securitySource":"operation","securitySchemes":{"premiumApiKey":{"type":"apiKey","in":"path","name":"apiKey","description":"Premium API key for production use. Test key '1' can be used for development."}}},"GET /popular.php":{"protocol":"http","operationId":"getPopularCocktails","responses":{"200":{"description":"Successful response with popular cocktails","content":{"application/json":{"schema":{"type":"object","properties":{"drinks":{"items":{"type":"object"},"key$":"drinks","type":"array"}},"index$":0}}}},"401":{"description":"Unauthorized - Premium API key required"}},"parameters":[],"security":[{"premiumApiKey":[]}],"securitySource":"operation","securitySchemes":{"premiumApiKey":{"type":"apiKey","in":"path","name":"apiKey","description":"Premium API key for production use. Test key '1' can be used for development."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_ref01_data = Object.values(setup.data.existing.list)[0] as any

    // LIST
    const list_ref01_ent = client.List()
    const list_ref01_match: any = {}

    const list_ref01_list = (await list_ref01_ent.list(list_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list/ListTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CocktailRecipeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['list01','list02','list03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COCKTAIL_RECIPE_TEST_LIST_ENTID': idmap,
    'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
    'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
    'COCKTAIL_RECIPE_APIKEY': '',
  })

  idmap = env['COCKTAIL_RECIPE_TEST_LIST_ENTID']

  const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COCKTAIL_RECIPE_TEST_LIST_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CocktailRecipeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
