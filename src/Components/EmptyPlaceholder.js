import React from 'react'
import cat from '../public/cat.png'
export default function EmptyPlaceholder() {
  return (
    <div className="empty-placeholder">
      <div className="empty-placeholder__img">
        <img src={cat} alt="cat" width={400} />
      </div>
      <h1 className="empty-placeholder__title">здесь пока ничего нет</h1>
    </div>
  )
}
