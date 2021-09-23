import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
export default function Header() {
  const history = useLocation()

  const [inSmooth, setInSmooth] = useState(false)
  useEffect(() => {
    history.pathname === '/' ? setInSmooth(false) : setInSmooth(true)
  }, [history.pathname])

  return (
    <CSSTransition
      in={inSmooth}
      timeout={300}
      classNames="navbar-transition"
      unmountOnExit={false}
    >
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <NavLink
              exact
              to="/"
              className="navbar__list-item-link"
              activeClassName="navbar__list-item_active-main"
            >
              главная
            </NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink
              to="/vue-projects"
              className="navbar__list-item-link"
              activeClassName="navbar__list-item_active-vue"
            >
              vue.js
            </NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink
              to="/react-projects"
              className="navbar__list-item-link"
              activeClassName="navbar__list-item_active-react"
            >
              react.js
            </NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink
              to="/html-projects"
              className="navbar__list-item-link"
              activeClassName="navbar__list-item_active-html"
            >
              html/css
            </NavLink>
          </li>
          <li className="navbar__list-item">
            <NavLink
              to="/about"
              activeClassName="navbar__list-item_active-about"
              className="navbar__list-item-link"
            >
              о себе
            </NavLink>
          </li>
        </ul>
      </nav>
    </CSSTransition>
  )
}
