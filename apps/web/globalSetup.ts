import { chromium } from "@playwright/test";

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  await context.addCookies([]);

  await browser.close();
}

export default globalSetup;
