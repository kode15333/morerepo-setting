const commonConfig = require('settings/jest.config.js');
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

module.exports = createJestConfig(commonConfig)
