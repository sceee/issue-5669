const params = require("firebase-functions/params");

const environmentVariable_FunctionsEmulator = params.defineBoolean('FUNCTIONS_EMULATOR');

exports.isRunningInEmulator = () => {
  console.log(`Process env: ${process.env.FUNCTIONS_EMULATOR}`)
  console.log(`defineBoolean: ${environmentVariable_FunctionsEmulator.value()}`)
  return environmentVariable_FunctionsEmulator.value() === true
}