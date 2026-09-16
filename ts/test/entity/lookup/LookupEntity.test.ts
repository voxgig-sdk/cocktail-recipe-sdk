

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


describe('LookupEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when COCKTAIL_RECIPE_TEST_LIVE=TRUE.
  afterEach(liveDelay('COCKTAIL_RECIPE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CocktailRecipeSDK.test()
    const ent = testsdk.Lookup()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.COCKTAIL_RECIPE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'lookup.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"drinks","req":false,"type":"`$ARRAY`","index$":0},{"active":true,"name":"ingredients","req":false,"type":"`$ARRAY`","index$":1}],"name":"lookup","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"example":"11007","kind":"query","name":"i","orig":"i","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"example":"552","kind":"query","name":"iid","orig":"iid","reqd":false,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /lookup.php","json":"{\"operationId\":\"lookupDetails\",\"parameters\":[{\"description\":\"Lookup cocktail by ID\",\"in\":\"query\",\"name\":\"i\",\"required\":false,\"schema\":{\"example\":\"11007\",\"type\":\"string\"}},{\"description\":\"Lookup ingredient by ID\",\"in\":\"query\",\"name\":\"iid\",\"required\":false,\"schema\":{\"example\":\"552\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"drinks\":{\"items\":{\"properties\":{\"idDrink\":{\"type\":\"string\"},\"strAlcoholic\":{\"type\":\"string\"},\"strCategory\":{\"type\":\"string\"},\"strDrink\":{\"type\":\"string\"},\"strDrinkThumb\":{\"type\":\"string\"},\"strGlass\":{\"type\":\"string\"},\"strInstructions\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"ingredients\":{\"items\":{\"properties\":{\"idIngredient\":{\"type\":\"string\"},\"strDescription\":{\"type\":\"string\"},\"strIngredient\":{\"type\":\"string\"},\"strType\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"}},\"securitySchemes\":{\"premiumApiKey\":{\"description\":\"Premium API key for production use. Test key '1' can be used for development.\",\"in\":\"path\",\"name\":\"apiKey\",\"type\":\"apiKey\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/lookup.php","segments":[{"lit":"lookup.php"}],"select":{"exist":["i","iid"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"lookup","name__orig":"lookup","Name":"Lookup","name_":"lookup","name-":"lookup","NAME":"LOOKUP","index$":2}, {"active":true,"entity":"lookup","key$":"BasicLookupFlow","kind":"basic","name":"BasicLookupFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"lookup_ref01"}}],"index$":0}]}, 'Lookup')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let lookup_ref01_data = Object.values(setup.data.existing.lookup)[0] as any

    // LIST
    const lookup_ref01_ent = client.Lookup()
    const lookup_ref01_match: any = {}

    const lookup_ref01_list = (await lookup_ref01_ent.list(lookup_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/lookup/LookupTestData.json')

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
    ['lookup01','lookup02','lookup03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'COCKTAIL_RECIPE_TEST_LOOKUP_ENTID': idmap,
    'COCKTAIL_RECIPE_TEST_LIVE': 'FALSE',
    'COCKTAIL_RECIPE_TEST_EXPLAIN': 'FALSE',
    'COCKTAIL_RECIPE_APIKEY': '',
  })

  idmap = env['COCKTAIL_RECIPE_TEST_LOOKUP_ENTID']

  const live = 'TRUE' === env.COCKTAIL_RECIPE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['COCKTAIL_RECIPE_TEST_LOOKUP_ENTID']
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
  
