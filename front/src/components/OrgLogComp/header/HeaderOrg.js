import React from 'react'
import OrgReg from '../../../conteiner/nav/navbars/OrgReg'
import classes from '../../../css/orgRegister.module.css'
export default function HeaderOrg() {
  return (
    <header className={classes.header}>
      <OrgReg />
      <div className={classes["main-text-org"]}>
        <h1>Размещайте рекламу у проверенных блоггеров  без комиссии и посредников</h1>
        <button>Get started</button>
      </div>
      <div></div>
    </header>
  )
}
