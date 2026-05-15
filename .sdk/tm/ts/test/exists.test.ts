
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CocktailRecipeSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await CocktailRecipeSDK.test()
    equal(null !== testsdk, true)
  })

})
