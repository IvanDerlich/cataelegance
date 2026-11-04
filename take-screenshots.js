const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // Desktop screenshot
  const desktopPage = await browser.newPage();
  await desktopPage.setViewport({ width: 1440, height: 900 });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await desktopPage.screenshot({ path: '/tmp/desktop-screenshot.png', fullPage: true });
  console.log('Desktop screenshot saved');

  // Mobile screenshot
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 375, height: 812 });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await mobilePage.screenshot({ path: '/tmp/mobile-screenshot.png', fullPage: true });
  console.log('Mobile screenshot saved');

  await browser.close();
})();
