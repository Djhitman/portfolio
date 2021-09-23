import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className="main-footer">
      <Link to="/about">
        <button className="main-footer__button main-footer__button-left">
          Заказать
        </button>
      </Link>
      <Link to="/about">
        <button className="main-footer__button main-footer__button-right">
          Ну... и немного о себе
        </button>
      </Link>
    </div>
  )
}
