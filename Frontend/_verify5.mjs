import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
page.on("console", (msg) => console.log("[console]", msg.type(), msg.text()));
page.on("pageerror", (err) => console.log("[pageerror]", err.message));

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

await page.click("#showAllPhotos");
await page.waitForTimeout(500);
console.log("after open tour:", page.url());

const firstPhoto = await page.$('button:has(img[alt="Living room with balcony view"])');
await firstPhoto?.click();
await page.waitForTimeout(500);
console.log("after open lightbox:", page.url());

// check how many dialog contents are in the DOM and their data-state
const dialogInfo = await page.evaluate(() => {
  const contents = Array.from(document.querySelectorAll('[role="dialog"]'));
  return contents.map((el) => ({
    ariaLabel: el.getAttribute("aria-label"),
    dataState: el.getAttribute("data-state"),
    id: el.id,
  }));
});
console.log("dialogs in DOM:", JSON.stringify(dialogInfo));

await page.keyboard.press("Escape");
await page.waitForTimeout(500);
console.log("after 1st ESC:", page.url());

await page.keyboard.press("Escape");
await page.waitForTimeout(500);
console.log("after 2nd ESC:", page.url());

await browser.close();
