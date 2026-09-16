

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"idDrink","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"strDrink","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"strDrinkThumb","req":false,"type":"`$STRING`","index$":2}],"name":"filter","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"Alcoholic","kind":"query","name":"a","orig":"a","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"Ordinary_Drink","kind":"query","name":"c","orig":"c","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"example":"Cocktail_glass","kind":"query","name":"g","orig":"g","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"example":"Gin","kind":"query","name":"i","orig":"i","reqd":false,"type":"`$STRING`","index$":3}]},"contract":{"id":"GET /filter.php","json":"{\"operationId\":\"filterCocktails\",\"parameters\":[{\"description\":\"Filter by ingredient (comma-separated for multi-ingredient, Premium only)\",\"in\":\"query\",\"name\":\"i\",\"required\":false,\"schema\":{\"example\":\"Gin\",\"type\":\"string\"}},{\"description\":\"Filter by alcoholic type\",\"in\":\"query\",\"name\":\"a\",\"required\":false,\"schema\":{\"enum\":[\"Alcoholic\",\"Non_Alcoholic\"],\"example\":\"Alcoholic\",\"type\":\"string\"}},{\"description\":\"Filter by category\",\"in\":\"query\",\"name\":\"c\",\"required\":false,\"schema\":{\"example\":\"Ordinary_Drink\",\"type\":\"string\"}},{\"description\":\"Filter by glass type\",\"in\":\"query\",\"name\":\"g\",\"required\":false,\"schema\":{\"example\":\"Cocktail_glass\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"drinks\":{\"items\":{\"properties\":{\"idDrink\":{\"type\":\"string\"},\"strDrink\":{\"type\":\"string\"},\"strDrinkThumb\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with filtered cocktails\"}},\"securitySchemes\":{\"premiumApiKey\":{\"description\":\"Premium API key for production use. Test key '1' can be used for development.\",\"in\":\"path\",\"name\":\"apiKey\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/filter.php","segments":[{"lit":"filter.php"}],"select":{"exist":["a","c","g","i"]},"transform":{"req":"`reqdata`","res":"`body.drinks`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"filter","name__orig":"filter","Name":"Filter","name_":"filter","name-":"filter","NAME":"FILTER","index$":0}, {"active":true,"entity":"filter","key$":"BasicFilterFlow","kind":"basic","name":"BasicFilterFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"filter_ref01"}}],"index$":0}]}, 'Filter')
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
  
