import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

const dir = "C:/Users/Mihir/AppData/Local/Temp/claude/m--Airbnb/131b8b03-9102-4412-8d0a-4947549c5ba6/scratchpad";

// click "Show all photos"
await page.click("#showAllPhotos");
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/render-tour.png`, fullPage: false });

// click first photo in Living room section to open lightbox
const firstPhoto = await page.$('button:has(img[alt="Living room with balcony view"])');
await firstPhoto?.click();
await page.waitForTimeout(300);
await page.screenshot({ path: `${dir}/render-lightbox.png` });

// press right arrow key to navigate
await page.keyboard.press("ArrowRight");
await page.waitForTimeout(200);
await page.screenshot({ path: `${dir}/render-lightbox-next.png` });

// press ESC - should return to tour, not close everything
await page.keyboard.press("Escape");
await page.waitForTimeout(300);
const urlAfterEsc1 = page.url();

// press ESC again - should close tour
await page.keyboard.press("Escape");
await page.waitForTimeout(300);
const urlAfterEsc2 = page.url();

console.log("url after first ESC (should still have photos=1):", urlAfterEsc1);
console.log("url after second ESC (should be clean):", urlAfterEsc2);

await browser.close();
console.log("done");
