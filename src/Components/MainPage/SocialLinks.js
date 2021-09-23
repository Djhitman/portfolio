import React from 'react'
import emailIcon from '../../public/icons/email.png'
import tgIcon from '../../public/icons/telegram.png'
import vkIcon from '../../public/icons/vk.png'
export default function SocialLinks() {
  return (
    <div className="social-links">
      <div className="social-links__link">
        <a href="mailto:sportsport462@gmail.com" target="_blank">
          <img src={emailIcon} alt="email" className="social-links__link-img" />
        </a>
      </div>

      <div className="social-links__link">
        <a href="https://vk.com/djhitman" target="_blank">
          <img src={vkIcon} alt="vk" className="social-links__link-img" />
        </a>
      </div>

      <div className="social-links__link">
        <a href="https://t.me/djhitman" target="_blank">
          <img src={tgIcon} alt="tg" className="social-links__link-img" />
        </a>
      </div>
    </div>
  )
}
