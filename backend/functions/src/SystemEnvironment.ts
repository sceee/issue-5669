import { defineBoolean } from 'firebase-functions/params'

const environmentVariable_FunctionsEmulator = defineBoolean('FUNCTIONS_EMULATOR')

export function isRunningInEmulator(): boolean {
  console.log(`Process env: ${process.env.FUNCTIONS_EMULATOR}`)
  console.log(`defineBoolean: ${environmentVariable_FunctionsEmulator.value()}`)
  return environmentVariable_FunctionsEmulator.value() === true
}
