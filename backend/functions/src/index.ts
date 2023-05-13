import * as functions from 'firebase-functions'
import { isRunningInEmulator } from './SystemEnvironment'

export const someFunction = functions.region('us-central1').https.onCall(async (data: unknown, context) => {
  const isInEmulator = isRunningInEmulator()
  console.log(`Running Emulator: ${isInEmulator}`)

  return isInEmulator
})
