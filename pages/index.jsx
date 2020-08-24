import React from 'react'
import ReactDOM from 'react-dom'
import App from './_app.jsx'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    if (typeof window !== 'undefined') {
     return <App />
    }
  }
}
