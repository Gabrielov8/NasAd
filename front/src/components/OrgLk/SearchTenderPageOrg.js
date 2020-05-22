import React from 'react'
import SearchTender from '../CabOrganization/SearchTender'
import ListTenders from '../CabOrganization/List/ListTenders'
import '../../css/myauctionMainpage.css'

export default function MainPageOrg() {
  return (
    <div className="main-page-org">
      <div className="dashboard-info-org">
        <h3>Поиск тендеров</h3>
        <p>22 Мая Пятница</p>
      </div>

      <div className="welcome-org">
        <div className="text-org">
          <h3>Welcome!</h3>
          <p>Здесь Вы можете найти тендер</p>
        </div>
        <img src="/imgBloggerLk/vhod.svg" alt="" />
      </div>

      <div className="info-block-org">
        <div className="first-org-searchList">
          <SearchTender />
          <ListTenders />
        </div>
        {/* <div className="second-org">
          
        </div> */}
      </div>
    </div>
  )
}
