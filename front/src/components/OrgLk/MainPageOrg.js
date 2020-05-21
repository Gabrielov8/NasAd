import React from 'react'
import CabOrganization from '../CabOrganization/CabOrganization'

export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Dashboard</h3>
        <p>21 Мая Четверг</p>
      </div>

      <div className="welcome-org">
        <div className="text-org">
          <h3>Welcome back Max!</h3>
          <p>Здесь написан какой-то текст</p>
        </div>
        <img src="/imgBloggerLk/vhod.svg" alt="" />
      </div>

      <div className="info-block-org">
        <div className="first-org">
          <CabOrganization />
        </div>
        <div className="second-org">
        </div>
      </div>
    </div>
  )
}
