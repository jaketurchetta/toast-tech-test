import React from 'react'
import '../client/dist/css/main.css'

const Header = ({ city, state }) => (
  <div className='headercontainer'>
    <h1 className='title'>Toasty</h1>
    <h4 className='subtitle'>The one-stop shop for determining how toasty it is outside.</h4>
    <h5 className='current'>Currently showing this week's weather in:</h5>
    <h6 className='location'>{city}, {state}</h6>
  </div>
)

export default Header
