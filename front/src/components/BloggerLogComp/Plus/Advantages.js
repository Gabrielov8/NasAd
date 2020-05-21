import React from 'react'
import classes from '../../../css/bloggerLog.module.css'
export default function Advantages() {
  return (
    <div className={classes.advantages}>

    <div className={classes["teg-advant"]}>
      <img src="/imgBloggerReg/money.svg" alt="" />
      <h3>Надежный канал заработка</h3>
      <p>Доступ к платформе для блогеров на 100% бесплатный</p>
    </div>
    <div className={classes["teg-advant"]}>
      <img src="/imgBloggerReg/garant.svg" alt="" />
      <h3>Полную гарантию оплат</h3>
      <p>Без посредников и комиссий</p>
    </div>
    <div className={classes["teg-advant"]}>
      <img src="/imgBloggerReg/free.svg" alt="" />
      <h3>Бесплатный доступ</h3>
      <p>Безопасные платежи
        и гарантия оплат рекламных публикаций</p>
    </div>
  </div>
  )
}
