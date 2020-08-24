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
    <div className='day'>
      <span className='weekday'> {weekday} </span>
      <div className='temperature'>
        <span className='temphigh'> {Math.round(temperature.max)}° </span>
        <span className='templow'> / {Math.round(temperature.min)}° </span>
      </div>
      <div className='circle' >
        <img className='icon' src={`http://openweathermap.org/img/wn/${icon}.png`} />
      </div>
      <span className='condition'> {condition} </span>
      <div className='precipitation'>
        <i className='fas fa-tint'></i>
        <span className='pop'> {Math.round(pop*100)}% </span>
      </div>

      <span className='date'> {month + ' ' + day} </span>
    </div>
  )
}

export default Day
