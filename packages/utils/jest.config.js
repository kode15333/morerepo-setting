module.exports = {
    roots: ['.'],
    testEnvironment: 'node',
    testMatch: ['**/*.test.ts'],
    modulePaths: ['<rootDir>/'],
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    coverageReporters: ['json-summary', 'text', 'lcov'],
}
