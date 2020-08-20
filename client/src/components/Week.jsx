import React from 'react'
import '../../dist/css/main.css'
import Day from './Day.jsx'

const Week = ({ weather }) => (
  <ul className='week'>
    {weather.map(day =>
      <Day key={day.dt}
        date={day.dt}
        temperature={day.temp}
        clouds={day.clouds}
        pop={day.pop}
        condition={day.weather.main}
        description={day.weather.description}
        icon={day.weather.icon} />)}
  </ul>
)

export default Week