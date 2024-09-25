import React from 'react'

const LegendItem = ({name, color}) => {
  return (
    
      <div className='d-flex align-items-center my-3'>
                <div style={{"height": "10px", marginRight: '10px', width: '10px', borderRadius:"10px", background:`${color}`}}></div>
                <span>{name}</span>
            </div>
    
  )
}

export default LegendItem
