import React from 'react'
import HeaderOrg from '../../components/OrgLogComp/header/HeaderOrg'
import classes from '../../css/orgRegister.module.css'
export default function OrgLog() {
  return (
    <div className={classes['wrapper-org']}>
      <div className={classes['container-org']}>
          <HeaderOrg />
      </div>
    </div>
  )
}
