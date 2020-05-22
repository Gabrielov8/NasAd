import React from 'react'
import AnnouncementAboutWin from '../CabOrganization/AnnouncementAboutWin'
import '../../css/myauctionMainpage.css'
export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Оповещения</h3>
        <p>22 Мая Пятница</p>
      </div>

      <div className="welcome-org">
        <div className="text-org">
          <h3>Welcome!</h3>
          <p></p>
        </div>
        <img src="/imgBloggerLk/vhod.svg" alt="" />
      </div>

      <div className="info-block-org">
        <div className="first-org-win">
          <AnnouncementAboutWin />
        </div>
      </div>
    </div>
  )
}
