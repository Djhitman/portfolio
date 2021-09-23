import React, { useState, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import About from './About'
import Main from './Main'
import HtmlProjects from './HtmlProjects'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import VueProjects from './VueProjects'
import ReactProjects from './ReactProjects'
import Header from './Components/Header'

export default function App() {
  const history = useLocation()
  return (
    <div>
      <Header />

      <TransitionGroup>
        <CSSTransition
          key={history.pathname}
          timeout={300}
          classNames="smooth"
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <Switch location={history}>
            <Route path="/about" children={<About />} />
            <Route path="/" exact children={<Main />} />
            <Route path="/vue-projects" exact children={<VueProjects />} />
            <Route path="/react-projects" exact children={<ReactProjects />} />
            <Route path="/html-projects" exact children={<HtmlProjects />} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  )
}
