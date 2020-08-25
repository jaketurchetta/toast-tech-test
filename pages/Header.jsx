import React from 'react'
import Search from './Search.jsx'

const Header = ({ city, state, handleChange, handleSubmit }) => (
  <div className='headercontainer'>
    <div className='cut-text'>TOASTY</div>
    <h5 className='current'>Currently showing this week's weather in:</h5>
    <h6 className='location'>{city}, {state}</h6>
    <Search handleChange={handleChange} handleSubmit={handleSubmit} />
  </div>
)

export default Header
