const commonConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/components/(.*)$": "<rootDir>/src/components/$1",
    "^@/utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  modulePaths: ["<rootDir>/src"],
  coverageReporters: ["clover", "json", "lcov", ["text", { skipFull: true }]],
  collectCoverageFrom: ["**/*.{js,jsx,ts,tsx}"],
  coverageDirectory: "../../coverage",
  coverageOutput: "../../coverage",
};

module.exports = commonConfig;
