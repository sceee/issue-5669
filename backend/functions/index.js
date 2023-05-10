const functions = require("firebase-functions");
const environment = require("./environment");

exports.myfunc = functions.https.onRequest((request, response) => {
  console.log(`Running Emulator: ${environment.isRunningInEmulator()}`);
  response.send();
});