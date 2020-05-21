import React from 'react'
import Logout from '../../conteiner/auth/Logout'
import CashBalance from '../CurrentUser/User/CashBalance'

export default function LogoutBlock() {
  return (
      <div className="foto-block">
        <div className="logout">
          <Logout />
          {/* <h3>Logout</h3> */}
          <i className="fas fa-sign-out-alt"></i>
        </div>

        <div className="foto">
          <img src="/imgBloggerLk/profile.svg" alt="" />
          <p>Max Gabrielov</p>
          <span>blogger</span>  
        </div>

        <div className="social">
          <p>Мои социальныe сети</p>
          <ul>
            <li>Инстаграм </li>
            <li>Вконтакте</li>
          </ul>
        </div>

        
      </div>

  )
}
