import React from 'react'
export default function PortfolioCard({ background, title, subtitle, icon }) {
  return (
    <div
      className="portfolio-card"
      style={{
        background
      }}
    >
      <div className="portfolio-card__img">
        <img src={icon} width={110} alt="react" />
      </div>
      <h1 className="portfolio-card__title">{title}</h1>
      <p className="portfolio-card__subtitle">{subtitle}</p>
    </div>
  )
}
