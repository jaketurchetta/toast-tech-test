import React from 'react'
import Day from './Day.jsx'

const Week = ({ weather }) => (
    <div className='week'>
      {weather.map(day =>
        <Day key={day.dt}
          date={day.dt}
          temperature={day.temp}
          clouds={day.clouds}
          pop={day.pop}
          condition={day.weather[0].main}
          description={day.weather[0].description}
          icon={day.weather[0].icon} />)}
    </div>
  )

export default Week
