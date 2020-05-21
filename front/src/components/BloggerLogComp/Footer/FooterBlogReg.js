import React from 'react'
import { Link, BrowserRouter } from 'react-router-dom'
import classes from '../../../css/bloggerLog.module.css'
function FooterBlogReg() {
  return (
    <BrowserRouter>
    <footer>
      <div className={classes.hidden}></div>
      <div className={classes.info}>
        <img src="/imgBloggerReg/phone.svg" alt="" />
        <ul>
          <li>
            <h3>Мы в социальных сетях</h3>
          </li>
          <li><Link to="#">Instagram</Link></li>
          <li><Link to="#">VK</Link></li>
          <li><Link to="#">Telegram</Link></li>
        </ul>
        <ul>
          <li>
            <h3>Навигация по сайту</h3>
          </li>
          <li><Link to="#">Блогерам</Link></li>
          <li><Link to="#">Рекламодателям</Link></li>
          <li><Link to="#">About</Link></li>
        </ul>
      </div>
      <div className={classes.paragraf}>
        <p>Elbrus 2020</p>
      </div>
    </footer>
    </BrowserRouter>
  )
}

export default FooterBlogReg
