import React from 'react'

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
      <div className='toprow'>
        <div className='daydate'>
          <span className='weekday'> {weekday} </span>
          <span className='date'> {month + ' ' + day} </span>
        </div>
        <div className='temperature'>
          <div className='tempcolumn'>
            <span className='temphigh'> {Math.round(temperature.max)}° </span>
            <span className='templow'> / {Math.round(temperature.min)}° </span>
          </div>
        </div>
      </div>
      <div className='middlerow'>
        <div className='circle' >
          <img className='icon' src={`http://openweathermap.org/img/wn/${icon}.png`} alt='Weather Icon' />
        </div>
        <span className='condition'> {condition} </span>
      </div>
      <div className='precipitation'>
        <div className='droplet'>
          <i className='fas fa-tint'></i>
        </div>
        <span className='pop'> {Math.round(pop*100)}% </span>
      </div>
    </div>
  )
}

export default Day
