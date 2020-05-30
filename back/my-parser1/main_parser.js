const puppeteer = require('puppeteer');
const cheerio = require('cheerio');


// const vk = 
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const sleep = (ms) => new Promise((res) => {
    setTimeout(res, ms);
  })

  const page = await browser.newPage();
  await page.goto('https://socialblade.com/instagram/user/novikovarkadiy');
  await page.waitForNavigation()
  page.on('console', (msg) => {
    console.log('PAGE LOG', msg.text());
  })
  
  let content = await page.content();
  console.log(content)
  await page.screenshot({ path: 'example.png' });
  await browser.close();
})()
