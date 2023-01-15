const commonConfig = require('settings/jest.config.js');
const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

console.log(commonConfig)
module.exports = createJestConfig(commonConfig)
