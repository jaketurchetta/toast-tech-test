import React from 'react'
import '../../dist/css/main.css'
import Week from './Week.jsx'
import { GOOGLE_API_KEY, WEATHER_API_KEY } from '../../../config.js'
import axios from 'axios'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      zip: '02101',
      city: 'Boston',
      state: 'MA',
      lat: 42.35659589999999,
      lng: -71.0564828,
      dailyWeather: []
    }
    this.getWeather = this.getWeather.bind(this)
  }

  componentDidMount() {
    this.getWeather()
  }

  getWeather(zip) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip||this.state.zip}&key=${GOOGLE_API_KEY}`)
      .then(response => {
        this.setState({
            zip: response.data.results[0].address_components[0].short_name,
            city: response.data.results[0].address_components[2].long_name,
            state: response.data.results[0].address_components[4].short_name,
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng,
        }, () => {
          axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lng}&exclude=minutely,hourly&appid=${WEATHER_API_KEY}`)
            .then(response => {
              this.setState({
                dailyWeather: response.data.daily
              })
            })
            .catch(err => console.log(err))
        })
      })
      .catch(err => console.log(err))
  }

  render() {

    return (
      <div className='container'>
        <Week weather={this.state.dailyWeather} />
      </div>
    )
  }

}