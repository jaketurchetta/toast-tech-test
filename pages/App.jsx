import React from 'react'
import '../client/dist/css/main.css'
import { GOOGLE_API_KEY, WEATHER_API_KEY } from '../config.js'
import axios from 'axios'
import Header from './Header.jsx'
import Search from './Search.jsx'
import Week from './Week.jsx'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      zip: '02130',
      city: 'Boston',
      state: 'MA',
      lat: 42.35659589999999,
      lng: -71.0564828,
      dailyWeather: []
    }
    this.getGeolocation = this.getGeolocation.bind(this)
    this.getAddress = this.getAddress.bind(this)
    this.getWeather = this.getWeather.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.validateInput = this.validateInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.getGeolocation(this.getWeather)
  }

  // HTTP REQUESTS
  getGeolocation(callback) {
    axios.get('http://www.geoplugin.net/json.gp')
      .then(response => {
        this.setState({
          lat: response.data.geoplugin_latitude,
          lng: response.data.geoplugin_longitude,
          city: response.data.geoplugin_city,
          state: response.data.geoplugin_regionCode,
          zip: ''
        })
      })
      .then(callback())
      .catch(err => console.log(err))
  }

  getAddress(zip, callback) {
    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${GOOGLE_API_KEY}`)
      .then(response => {
        this.setState({
            zip: response.data.results[0].address_components[0].short_name,
            city: response.data.results[0].address_components[1].long_name,
            state: response.data.results[0].address_components[3].short_name,
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng,
        })
      })
      .then(callback())
      .catch(err => console.log(err))
  }

  getWeather() {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.lat}&lon=${this.state.lng}&exclude=minutely,hourly&appid=${WEATHER_API_KEY}&units=imperial`)
      .then(response => {
        this.setState({
          dailyWeather: response.data.daily.slice(0,7)
        })
      })
      .catch(err => console.log(err))
  }

  // FORM HANDLERS
  handleChange(event) {
    this.setState({zip: event.target.value})
  }

  validateInput(input) {
    let num = Number(input)
    let len = input.length
    if (isNaN(num) || len !== 5) {
      alert('Please enter a valid 5-digit ZIP code.')
      return false
    }
    return true
  }

  handleSubmit(event) {
    event.preventDefault()
    if (this.validateInput(this.state.zip)) {
      this.getAddress(this.state.zip, this.getWeather)
    }
  }

  render() {
    return (
      <div className='appcontainer'>
        <Header city={this.state.city} state={this.state.state} />
        <Search handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
        <Week weather={this.state.dailyWeather} />
      </div>
    )
  }

}
