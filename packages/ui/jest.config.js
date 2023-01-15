module.exports = {
    roots: ['.'],
    testEnvironment: 'jest-environment-jsdom',
    testMatch: ['**/*.test.(ts|tsx)'],
    modulePaths: ['<rootDir>/'],
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
    },
    moduleNameMapper: {
        "^~/(.*)$": "<rootDir>/",
    },
    coverageReporters: ['json-summary', 'text', 'lcov'],
}
