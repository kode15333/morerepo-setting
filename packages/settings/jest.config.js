const commonConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@/hooks/(.*)$": "<rootDir>/src/hooks/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ["<rootDir>/src"],
  coverageReporters: ["json", "lcov", ["text", { skipFull: true }]],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
};

module.exports = commonConfig;
