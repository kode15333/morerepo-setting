import { defineConfig, devices } from "@playwright/test";
import path from "node:path";
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: path.resolve(__dirname, "tests"),
  globalSetup: path.resolve(__dirname, "globalSetup.ts"),
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [["json", { outputFile: "test-results.json" }]],
  use: {
    baseURL: "http://localhost:3000",
    trace: "retry-with-trace",
    storageState: path.resolve(__dirname, "storage-state.json"),
    userAgent: "Playwright",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
  webServer: {
    command: "yarn dev",
    reuseExistingServer: !process.env.CI,
    url: "http://localhost:3000",
  },
});
