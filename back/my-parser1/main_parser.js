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

  


  // await page.$eval('#stats-top-data-content', (el) => {
  //   const arr = []
  //   arr.push({
  //     followers: el.querySelector('.stats-top-data-content').innerText,
  //   })
  //   console.log(arr)
  //   return arr
  // })
  
  // await page.type('input[name="query"]', 'https://www.instagram.com/novikovarkadiy/?hl=ru', {delay: 50})
  // const button = await page.type('button[type="submit"]')
  // await button.click()
  // const inputQuery = await page.$x()
  // await loginButton[0].click()

  

  // await page.waitFor(5000)
  // await page.goto('https://www.instagram.com/novikovarkadiy/?hl=ru', {waitUntil: 'networkidle2'})
  // await page.waitFor(1000)

  // // const subscribers = await page.$eval('.g47SY', (el) => {
  // //   const sub = el.innerText
  // //   return sub
  // // })
  // const data = await page.$$eval('.g47SY', (elements) => {
  //   // const posts = elements[0].innerText
  //   // const subscribers = elements[1].innerText
  //   // const subscriptions = elements[2].innerText
  //   // console.log(posts, subscribers, subscriptions)
  //   obj = {
  //     posts: elements[0].innerText,
  //     subscribers: elements[1].innerText,
  //     subscriptions: elements[2].innerText
  //   }
  //   return obj
  // })
  // console.log(data);
  
  

  // const result = await page.$$eval('._3dEHb', (elements) => {
  //   const add = []
  //   for (el of elements) {
  //     console.log(el.innerText)
  //   }
  //   return add
    // const add = {
    //   posts: elements[0].innerText,
    //   subscribers: elements[1].innerText,
    //   subscriptions: elements[2].innerText
    // }
    // console.log(add)
    // return add
  // })
  // console.log(result)

  await page.screenshot({ path: 'example.png' });
  await browser.close();
})()
