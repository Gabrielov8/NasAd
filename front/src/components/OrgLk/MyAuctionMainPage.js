import React from 'react'
import Myauction from '../../conteiner/nav/navbars/Myauction'
import '../../css/myauctionMainpage.css'


export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Мои аукционы</h3>
        <p>22 Мая Пятница</p>
      </div>

      <div className="welcome-org">
        <div className="text-org">
          <h3>Welcome!</h3>
          <p>Здесь Вы можете выбрать победителя аукциона</p>
        </div>
        <img src="/imgBloggerLk/vhod.svg" alt="" />
      </div>

      <div className="info-block-org">
        <div className="my-first-org-auction">
          <Myauction/>
        </div>
      </div>
    </div>
  )
}

