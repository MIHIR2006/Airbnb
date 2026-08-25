import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

const dir = "C:/Users/Mihir/AppData/Local/Temp/claude/m--Airbnb/131b8b03-9102-4412-8d0a-4947549c5ba6/scratchpad";

await page.click("#showAllPhotos");
await page.waitForLoadState("networkidle");
await page.waitForTimeout(400);

const firstPhoto = await page.$('button:has(img[alt="Living room with balcony view"])');
await firstPhoto?.click();
await page.waitForLoadState("networkidle");
await page.waitForTimeout(600);
await page.screenshot({ path: `${dir}/render-lightbox-clean.png` });

await browser.close();
console.log("done");
