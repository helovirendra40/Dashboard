import React from 'react'

const RightTitle = ({name}) => {
  return (
    <div className='titlebetween mb-3 my-2 d-flex justify-content-between align-items-center'>
      <h3>{name}</h3>
      <button className="viewAll">View All</button>
    </div>
  )
}

export default RightTitle
