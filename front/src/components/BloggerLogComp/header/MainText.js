import React from 'react'
import classes from '../../../css/bloggerLog.module.css'
export default function MainText() {
  return (
    <>
      <div className={classes["main-text"]}>
        <div className={classes.text}>
          <h2>Лучшие рекламодатели России ждут сотрудничества с тобой</h2>
          <button>Get started</button>
        </div>
        <div className={classes.foto}>
          <img src="/imgBloggerReg/insta_men.svg" alt=""/>
        </div>
      </div>
    </>
  )
}

