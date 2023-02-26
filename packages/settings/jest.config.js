const commonConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/pages/(.*)$': '<rootDir>/pages/$1',
        '^@/components/(.*)$': '<rootDir>/src/components/$1',
        '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
    modulePaths: ['<rootDir>/src'],
    coverageReporters: ['text', 'lcov'],
    coverageDirectory: '<rootDir>/coverage',
}

module.exports = commonConfig
