import React from 'react'
import ReactDOM from 'react-dom'
import App from './_app.jsx'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      // <!DOCTYPE html>
      <html lang='en'>
        <head>
          <title>Toasty</title>
          <meta charset="UTF-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
          <meta name="Description" content="Toast marketing Front End Developer coding challenge."></meta>
          <script src="https://kit.fontawesome.com/61bb554ebd.js" crossorigin="anonymous"></script>
        </head>
        <body>
          <div class="container" id="app" style="font-family: Muli, sans-serif; height: 100%; width: 100%; margin: 0; min-height: 100%; display: flex; align-items: center; justify-content: center;" >
            <App />
          </div>
        </body>
      </html>
    )
  }
}
