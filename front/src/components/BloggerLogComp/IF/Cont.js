import React from 'react'
import classes from '../../../css/bloggerLog.module.css'
export default function Cont() {
  return (
    <div className={classes.cont}>

    <div className={classes.cont1}>
      <div className={classes["if-element"]}>
        <img src="/imgBloggerReg/facebook.svg" alt="" />
        <p>Ты ведёшь блог в Instagram или в Вконтакте</p>
      </div>
      <div className={classes["if-element"]}>
        <img src="/imgBloggerReg/moscow.svg" alt="" />
        <p>Более 50% твоих подписчиков из России</p>
      </div>
    </div>

    <div className={classes.cont1}>
      <div class={classes["if-element"]}>
        <img src="/imgBloggerReg/1ml.svg" alt="" />
        <p>У тебя более 1500 реальных подписчиков</p>
      </div>
      <div className={classes["if-element"]}>
        <img src="/imgBloggerReg/content.svg" alt="" />
        <p>Ты публикуешь качественный контент</p>
      </div>

    </div>
    <button>Get started</button>
  </div>
  )
}
