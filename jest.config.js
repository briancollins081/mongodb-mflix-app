module.exports = {
  globalSetup: "./test/config/setup.js",
  globalTeardown: "./test/config/teardown.js",
  testEnvironment: "./test/config/mongoEnvironment",
  testTimeout: 30000
}
// jest.setTimeout(30000);