import React from 'react'

const Header = ({ city, state }) => (
  <div className='headercontainer'>
    <div className='cut-text'>TOASTY</div>
    <h5 className='current'>Currently showing this week's weather in:</h5>
    <h6 className='location'>{city}, {state}</h6>
  </div>
)

export default Header
