import React, { Component } from 'react'
import HeaderBlogReg from '../../components/BloggerLogComp/header/HeaderBlogReg'
import Section from '../../components/BloggerLogComp/Plus/Section'
import IfReg from '../../components/BloggerLogComp/IF/IfReg'
import FooterBlogReg from '../../components/BloggerLogComp/Footer/FooterBlogReg'
import classes from '../../css/bloggerLog.module.css'

export default class BloggerLog extends Component {
  render() {

    return (
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <HeaderBlogReg />
          <Section />
          <IfReg />
          <FooterBlogReg />
        </div>
      </div>
    )
  }
}
