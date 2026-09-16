

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


describe('RandomEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('COCKTAIL_RECIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CocktailRecipeSDK.test()
    const ent = testsdk.Random()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'random.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"drinks","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"idDrink","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"strAlcoholic","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"strCategory","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"strDrink","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"strDrinkThumb","req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"strGlass","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"strIngredient1","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"strIngredient2","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"strInstructions","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"strMeasure1","req":false,"type":"`$STRING`","index$":10},{"active":true,"name":"strMeasure2","req":false,"type":"`$STRING`","index$":11}],"name":"random","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /random.php","json":"{\"operationId\":\"getRandomCocktail\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"drinks\":{\"items\":{\"properties\":{\"idDrink\":{\"type\":\"string\"},\"strAlcoholic\":{\"type\":\"string\"},\"strCategory\":{\"type\":\"string\"},\"strDrink\":{\"type\":\"string\"},\"strDrinkThumb\":{\"type\":\"string\"},\"strGlass\":{\"type\":\"string\"},\"strIngredient1\":{\"nullable\":true,\"type\":\"string\"},\"strIngredient2\":{\"nullable\":true,\"type\":\"string\"},\"strInstructions\":{\"type\":\"string\"},\"strMeasure1\":{\"nullable\":true,\"type\":\"string\"},\"strMeasure2\":{\"nullable\":true,\"type\":\"string\"}},\"type\":\"object\"},\"maxItems\":1,\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with random cocktail\"}},\"securitySchemes\":{\"premiumApiKey\":{\"description\":\"Premium API key for production use. Test key '1' can be used for development.\",\"in\":\"path\",\"name\":\"apiKey\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/random.php","segments":[{"lit":"random.php"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.drinks`"},"index$":0},{"active":true,"args":{},"contract":{"id":"GET /randomselection.php","json":"{\"operationId\":\"getRandomSelection\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"drinks\":{\"items\":{\"type\":\"object\"},\"maxItems\":10,\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response with 10 random cocktails\"},\"401\":{\"description\":\"Unauthorized - Premium API key required\"}},\"security\":[{\"premiumApiKey\":[]}],\"securitySchemes\":{\"premiumApiKey\":{\"description\":\"Premium API key for production use. Test key '1' can be used for development.\",\"in\":\"path\",\"name\":\"apiKey\",\"type\":\"apiKey\"}},\"securitySource\":\"operation\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/randomselection.php","segments":[{"lit":"randomselection.php"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.drinks`"},"index$":1}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"random","name__orig":"random","Name":"Random","name_":"random","name-":"random","NAME":"RANDOM","index$":3}, {"active":true,"entity":"random","key$":"BasicRandomFlow","kind":"basic","name":"BasicRandomFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"random_ref01"}}],"index$":0}]}, 'Random')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let random_ref01_data = Object.values(setup.data.existing.random)[0] as any

    // LIST
    const random_ref01_ent = client.Random()
    const random_ref01_match: any = {}

    const random_ref01_list = (await random_ref01_ent.list(random_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/random/RandomTestData.json')

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
    ['random01','random02','random03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COCKTAIL_RECIPE_TEST_RANDOM_ENTID': idmap,
    'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
    'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
    'COCKTAIL_RECIPE_APIKEY': '',
  })

  idmap = env['COCKTAIL_RECIPE_TEST_RANDOM_ENTID']

  const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COCKTAIL_RECIPE_TEST_RANDOM_ENTID']
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
  
