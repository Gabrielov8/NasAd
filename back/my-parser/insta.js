const puppeteer = require('puppeteer');



// const vk = 
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const sleep = (ms) => new Promise((res) => {
    setTimeout(res, ms);
  })
  const page = await browser.newPage();
  await page.goto('https://www.instagram.com/?hl=ru', { waitUntil: 'networkidle2' });
  // await page.waitForNavigation()

  page.on('console', (msg) => {
    console.log('PAGE LOG', msg.text());
  })
  await page.type('input[name="username"]', '//////////', { delay: 50 }) // здесь твой логин
  await page.type('input[name="password"]', '//////////', { delay: 50 }) // здесь твой пароль

  const loginButton = await page.$x('//div[contains(text(), "Войти")]')
  await loginButton[0].click()

  await page.waitFor(5000)
  await page.goto('https://www.instagram.com/novikovarkadiy/?hl=ru', { waitUntil: 'networkidle2' })
  await page.waitFor(1000)
  const data = await page.$$eval('.g47SY', (elements) => {
    obj = {
      posts: elements[0].innerText,
      subscribers: elements[1].innerText,
      subscriptions: elements[2].innerText
    }
    return obj
  })
  console.log(data)

  const elements = await page.$$('.v1Nh3')
  const arr = []
  debugger;
  
    await elements[0].click()
    await page.waitFor(1000)
    const text = await page.$('.vcOH2 > span').innerText
    console.log(text)
    
  
  console.log(arr)

  await page.screenshot({ path: 'example.png' });
  await browser.close();

})()
