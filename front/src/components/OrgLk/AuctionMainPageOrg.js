import React from 'react'
import Auction from '../../conteiner/Auction'
import '../../css/makeauction.css'
export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Make auction</h3>
        <p>03 июня Среда</p>
      </div>

      <div className="welcome-org">
        <div className="text-org">
          <h3>Welcome!</h3>
          <p>Создайте Ваш аукцион</p>
        </div>
        <img src="/imgBloggerLk/vhod.svg" alt="" />
      </div>

      <div className="info-block-org">
        <div className="first-org-auction">
          <Auction />
        </div>

      </div>
    </div>
  )
}
