import React from 'react'
import { Link } from 'react-router-dom'

export default function Avatar({ avatar }) {
  return (
    <div className="main-avatar text-center">
      <Link to="/about">
        <img src={avatar} alt="main-avatar" width={200} />
      </Link>
    </div>
  )
}
