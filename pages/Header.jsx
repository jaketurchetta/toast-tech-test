import React from 'react'
import '../client/dist/css/main.css'

const Header = ({ city, state }) => (
  <div className='headercontainer'>
    <h1 className='title'>Toasty or Not?</h1>
    <h3 className='subtitle'>Currently showing this week's weather in {city}, {state}</h3>
  </div>
)

export default Header
