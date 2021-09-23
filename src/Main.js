import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
//Files, Images
import vueIcon from './public/vue.png'
import reactIcon from './public/react.png'
import webIcon from './public/web.png'

//Components
import Avatar from './Components/MainPage/Avatar'
import avatar from './public/avatar.jpg'
import Title from './Components/MainPage/Title'
import SocialLinks from './Components/MainPage/SocialLinks'
import Subtitle from './Components/MainPage/Subtitle'
import PortfolioCard from './Components/MainPage/PortfolioCard'
import Footer from './Components/MainPage/Footer'

export default function Main() {
  return (
    <Container>
      <Row>
        <Col xl={12} className="card-wrapper">
          <Avatar avatar={avatar} />
          <Title title={{ name: 'Сергей', nickname: 'djhitman' }} />
          <SocialLinks />
          <Subtitle subtitle="Верстка / frontend разработка" />
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col xl={3} lg={4}>
          <Link to="/vue-projects">
            <PortfolioCard
              background="linear-gradient(339deg, rgba(63,178,127,1) 0%, rgba(54,210,141,1) 100%)"
              title="Vue.js"
              subtitle="проекты"
              icon={vueIcon}
            />
          </Link>
        </Col>
        <Col xl={3} lg={4}>
          <Link to="/react-projects">
            <PortfolioCard
              background="linear-gradient(-230deg, rgba(97,219,251,1) 0%, rgba(67,190,222,1) 100%)"
              title="React.js"
              subtitle="проекты"
              icon={reactIcon}
            />
          </Link>
        </Col>

        <Col xl={3} lg={4}>
          <Link to="/html-projects">
            <PortfolioCard
              background="linear-gradient(147deg, rgba(97,112,251,1) 0%, rgba(60,86,216,1) 100%)"
              title="html/css"
              subtitle="проекты"
              icon={webIcon}
            />
          </Link>
        </Col>
      </Row>

      <Row className="text-center mt-3">
        <Footer />
      </Row>
    </Container>
  )
}
