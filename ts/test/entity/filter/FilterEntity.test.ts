

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


describe('FilterEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('COCKTAIL_RECIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CocktailRecipeSDK.test()
    const ent = testsdk.Filter()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'filter.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"idDrink":{"a":true,"h":"Id Drink","n":"idDrink","r":false,"t":"`$STRING`","key$":"idDrink","index$":0},"strDrink":{"a":true,"h":"Str Drink","n":"strDrink","r":false,"t":"`$STRING`","key$":"strDrink","index$":1},"strDrinkThumb":{"a":true,"h":"Str Drink Thumb","n":"strDrinkThumb","r":false,"t":"`$STRING`","key$":"strDrinkThumb","index$":2}},"name":"filter","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /filter.php","source":"openapi3","version":2},"g":{"query":[{"a":true,"ex":"Alcoholic","k":"query","n":"a","or":"a","r":false,"t":"`$STRING`","index$":0},{"a":true,"ex":"Ordinary_Drink","k":"query","n":"c","or":"c","r":false,"t":"`$STRING`","index$":1},{"a":true,"ex":"Cocktail_glass","k":"query","n":"g","or":"g","r":false,"t":"`$STRING`","index$":2},{"a":true,"ex":"Gin","k":"query","n":"i","or":"i","r":false,"t":"`$STRING`","index$":3}]},"k":"http","m":"GET","o":"/filter.php","q":{"exist":["a","c","g","i"]},"r":{},"s":[{"lit":"filter.php"}],"t":{"req":"`reqdata`","res":"`body.drinks`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"filter","name__orig":"filter","Name":"Filter","name_":"filter","name-":"filter","NAME":"FILTER","index$":0}, {"active":true,"entity":"filter","key$":"BasicFilterFlow","kind":"basic","name":"BasicFilterFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"filter_ref01"}}],"index$":0}]}, 'Filter', {"GET /filter.php":{"protocol":"http","operationId":"filterCocktails","responses":{"200":{"description":"Successful response with filtered cocktails","content":{"application/json":{"schema":{"type":"object","properties":{"drinks":{"items":{"properties":{"idDrink":{"type":"string","key$":"idDrink"},"strDrink":{"type":"string","key$":"strDrink"},"strDrinkThumb":{"type":"string","key$":"strDrinkThumb"}},"type":"object","index$":0},"key$":"drinks","type":"array"}}}}}}},"parameters":[{"name":"i","in":"query","description":"Filter by ingredient (comma-separated for multi-ingredient, Premium only)","required":false,"schema":{"type":"string","example":"Gin"},"index$":0},{"name":"a","in":"query","description":"Filter by alcoholic type","required":false,"schema":{"type":"string","enum":["Alcoholic","Non_Alcoholic"],"example":"Alcoholic"},"index$":1},{"name":"c","in":"query","description":"Filter by category","required":false,"schema":{"type":"string","example":"Ordinary_Drink"},"index$":2},{"name":"g","in":"query","description":"Filter by glass type","required":false,"schema":{"type":"string","example":"Cocktail_glass"},"index$":3}],"securitySource":"unspecified","securitySchemes":{"premiumApiKey":{"type":"apiKey","in":"path","name":"apiKey","description":"Premium API key for production use. Test key '1' can be used for development."}}}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let filter_ref01_data = Object.values(setup.data.existing.filter)[0] as any

    // LIST
    const filter_ref01_ent = client.Filter()
    const filter_ref01_match: any = {}

    const filter_ref01_list = (await filter_ref01_ent.list(filter_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/filter/FilterTestData.json')

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
    ['filter01','filter02','filter03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COCKTAIL_RECIPE_TEST_FILTER_ENTID': idmap,
    'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
    'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
    'COCKTAIL_RECIPE_APIKEY': '',
  })

  idmap = env['COCKTAIL_RECIPE_TEST_FILTER_ENTID']

  const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COCKTAIL_RECIPE_TEST_FILTER_ENTID']
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
  
