import React from 'react'
export default function Title({ title }) {
  return (
    <h3 className="main-title text-center">
      {title.name} | {title.nickname}
    </h3>
  )
}
