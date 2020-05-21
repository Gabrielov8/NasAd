import React from 'react'
import Logout from '../../conteiner/auth/Logout'

export default function LogoutOrg() {
  return (
      <div className="foto-block-org">
        <div className="logout-org">
          <Logout />
          <i className="fas fa-sign-out-alt"></i>
        </div>

        <div className="foto-org">
          <img src="/imgBloggerLk/profile.svg" alt="" />
          <p>Max Gabrielov</p>
          <span>blogger</span>  
        </div>

        <div className="social-org">
          <p>Мои социальныe сети</p>
          <ul>
            <li>Инстаграм</li>
            <li>Вконтакте</li>
          </ul>
        </div>
      </div>

  )
}
