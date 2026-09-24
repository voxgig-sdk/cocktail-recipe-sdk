
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { CocktailRecipeSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = CocktailRecipeSDK.test()
    equal(testsdk instanceof CocktailRecipeSDK, true,
      'CocktailRecipeSDK.test() must return a client synchronously')
  })

})
