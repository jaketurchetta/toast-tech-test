import React from 'react'
import '../../dist/css/main.css'

const Day = ({ date, temperature, clouds, pop, condition, description, icon }) => {

  // UTC to local date conversion
  const d = new Date(0)
  d.setUTCSeconds(date)
  const daystring = d.toString()
  const weekday = daystring.substr(0,3)
  const month = daystring.substr(4,3)
  const day = daystring.substr(8,2)
  const year = daystring.substr(11,4)

  return (
    <li className='days'>
      <span className='weekday'> {weekday} </span>
      <span className='day'> {day} </span>
      <span className='month'> {month} </span>
    </li>
  )
}

export default Day
