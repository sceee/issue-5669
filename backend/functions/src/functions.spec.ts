import * as fft from 'firebase-functions-test'
import * as myFunctions from './index'
import { expect } from 'chai'

const projectConfig = {
  projectId: 'cole-pineapple',
  storageBucket: 'cole-pineapple.appspot.com',
}

export const testFunctions = fft(projectConfig)

describe('', () => {
  it('execute some test', async () => {
    const result = (await testFunctions.wrap(myFunctions.someFunction)({})) as boolean
    expect(result).to.equal(true)
  })
})
