import { test, expect } from "@playwright/test";

test("Home Test", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveURL("http://localhost:3000/");
});
