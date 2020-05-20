const puppeteer = require('puppeteer');



  // const vk = 
  const parcerVk = async (url) => {
    const browser = await puppeteer.launch();
    const sleep = (ms) => new Promise((res) => {
      setTimeout(res, ms);
    })
    const page = await browser.newPage();
    await page.goto('https://www.vk.com/');

    page.on('console', (msg) => {
      console.log('PAGE LOG', msg.text());
    })

    await page.$eval('#index_email', (elem) => {
      elem.value = '......' // здесь твой логин
    });

    await page.$eval('#index_pass', (elem) => {
      elem.value = '......' // здесь твой пароль
    });

    await page.click('#index_login_button')
    await page.waitForNavigation()

    await page.goto(url)

    ///////////////////////////////////////////
    //второй вариант количество подписчиков
    const result = await page.$eval('.header_count', (element) => {
      const subscribers = element.innerText
      return subscribers
    })
    console.log(result,'podpiski')
    ///////////////////////////////////////////


    //скролинг сайта
    await page.evaluate(() => {
      window.scroll(0, document.body.scrollHeight)  // скролинг по x или по y оси
    })
    await sleep(1000)

    ///////////////////////////////////////////s
    //получение статы 
    const stat = await page.$$eval('.post', (elements) => {
      const add = []
      for (el of elements) {
        add.push({
          likes: el.querySelector('.like > .like_button_count').innerText,
          // comments: el.querySelector('.comment > .like_button_count').innerText,
          // comments: el.querySelector('.like_cont' ).innerText,
          repost: el.querySelector('.share > .like_button_count').innerText,
          views: el.querySelector('.like_views').innerText,
          date: el.querySelector('.post_link').innerText
        })
      }
      return add
    })
    console.log(stat)
    console.log(stat.length)
    ///////////////////////////////////////////


    // await page.screenshot({ path: 'example.png' });
    await browser.close();
    return result, stat
  }

  module.exports = parcerVk

// module.exports = vk

// const autoScroll = async (page) => {
//   await page.evaluate(async () => {
//     await new Promise((resolve, reject) => {
//       let totalHeight = 0
//       let distance = 100
//       let timer = setInterval(() => {
//         let scrollHeight = document.body.scrollHeight
//         window.scrollBy(0, distance)
//         totalHeight += distance
//         if(totalHeight >= scrollHeight){
//           clearInterval(timer)
//           resolve()
//         }
//       }, 100)
//     })
//   })
// }