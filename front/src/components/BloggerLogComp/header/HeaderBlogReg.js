import React from 'react'
import MainText from './MainText'
import Fons from './Fons'
import BloggerReg from '../../../conteiner/nav/navbars/BloggerReg'
import classes from '../../../css/bloggerLog.module.css'


export default function HeaderBlogReg() {
  return (
    <div className={classes.header}>
      <BloggerReg />
      <MainText />
      <Fons />
    </div>
  )
}
