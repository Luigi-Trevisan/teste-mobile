export const config: WebdriverIO.Config = {
  runner: 'local',

  // 👉 ESSENCIAL PARA BROWSERSTACK
  hostname: 'hub.browserstack.com',
  port: 443,
  protocol: 'https',
  user: 'luigitrevisan_xJKEts', // 🔐 seu usuário da BrowserStack
  key: 'st35JEjXvzdLKK5YP6ws',   // 🔐 sua chave de acesso

  specs: ['./test/specs/**/*.ts'],
  maxInstances: 1,

  capabilities: [{
    platformName: 'Android',
    'appium:deviceName': 'Google Pixel 5', 
    'appium:platformVersion': '11.0',
    'appium:automationName': 'UiAutomator2',
    'appium:app': 'bs://6302aa12607ce298d4762c53fa44dfc60060a8af', 

    'bstack:options': {
      projectName: 'Projeto Teste',
      buildName: 'Build inicial WDIO',
      sessionName: 'Primeiro teste',
      debug: true
    }
  }],

  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],

  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  },

  // 👇 NÃO use appium local para BrowserStack!
  services: []
};
