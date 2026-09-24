

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


describe('SearchEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('COCKTAIL_RECIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CocktailRecipeSDK.test()
    const ent = testsdk.Search()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'search.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"drinks":{"a":true,"h":"Drinks","n":"drinks","r":false,"t":"`$ARRAY`","key$":"drinks","index$":0},"ingredients":{"a":true,"h":"Ingredients","n":"ingredients","r":false,"t":"`$ARRAY`","key$":"ingredients","index$":1}},"name":"search","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /search.php","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"a","k":"query","n":"f","or":"f","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"vodka","k":"query","n":"i","or":"i","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"margarita","k":"query","n":"s","or":"s","r":false,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/search.php","q":{"exist":["f","i","s"]},"r":{},"s":[{"lit":"search.php"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"search","name__orig":"search","Name":"Search","name_":"search","name-":"search","NAME":"SEARCH","index$":4}, {"active":true,"entity":"search","key$":"BasicSearchFlow","kind":"basic","name":"BasicSearchFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"search_ref01"}}],"index$":0}]}, 'Search', {"GET /search.php":{"protocol":"http","operationId":"searchCocktails","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"drinks":{"items":{"properties":{"dateModified":{"format":"date-time","nullable":true,"type":"string"},"idDrink":{"description":"Unique drink ID","type":"string"},"strAlcoholic":{"description":"Alcoholic or Non-Alcoholic","type":"string"},"strCategory":{"description":"Drink category","type":"string"},"strDrink":{"description":"Drink name","type":"string"},"strDrinkAlternate":{"nullable":true,"type":"string"},"strDrinkThumb":{"description":"URL to drink thumbnail image","type":"string"},"strGlass":{"description":"Type of glass","type":"string"},"strIBA":{"nullable":true,"type":"string"},"strIngredient1":{"nullable":true,"type":"string"},"strIngredient2":{"nullable":true,"type":"string"},"strIngredient3":{"nullable":true,"type":"string"},"strInstructions":{"description":"Recipe instructions","type":"string"},"strMeasure1":{"nullable":true,"type":"string"},"strMeasure2":{"nullable":true,"type":"string"},"strMeasure3":{"nullable":true,"type":"string"},"strTags":{"nullable":true,"type":"string"},"strVideo":{"nullable":true,"type":"string"}},"type":"object"},"key$":"drinks","type":"array"},"ingredients":{"items":{"properties":{"idIngredient":{"type":"string"},"strABV":{"nullable":true,"type":"string"},"strAlcohol":{"nullable":true,"type":"string"},"strDescription":{"nullable":true,"type":"string"},"strIngredient":{"type":"string"},"strType":{"nullable":true,"type":"string"}},"type":"object"},"key$":"ingredients","type":"array"}},"index$":0}}}}},"parameters":[{"name":"s","in":"query","description":"Search cocktail by name","required":false,"schema":{"type":"string","example":"margarita"},"index$":0},{"name":"f","in":"query","description":"List all cocktails by first letter","required":false,"schema":{"type":"string","minLength":1,"maxLength":1,"example":"a"},"index$":1},{"name":"i","in":"query","description":"Search ingredient by name","required":false,"schema":{"type":"string","example":"vodka"},"index$":2}],"securitySource":"unspecified","securitySchemes":{"premiumApiKey":{"type":"apiKey","in":"path","name":"apiKey","description":"Premium API key for production use. Test key '1' can be used for development."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let search_ref01_data = Object.values(setup.data.existing.search)[0] as any

    // LIST
    const search_ref01_ent = client.Search()
    const search_ref01_match: any = {}

    const search_ref01_list = (await search_ref01_ent.list(search_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/search/SearchTestData.json')

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
    ['search01','search02','search03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COCKTAIL_RECIPE_TEST_SEARCH_ENTID': idmap,
    'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
    'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
    'COCKTAIL_RECIPE_APIKEY': '',
  })

  idmap = env['COCKTAIL_RECIPE_TEST_SEARCH_ENTID']

  const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COCKTAIL_RECIPE_TEST_SEARCH_ENTID']
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
  
