import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("basic test", async ({ page }) => {
  await expect(page.getByTestId("home1")).toBeVisible();
});
