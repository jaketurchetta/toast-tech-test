import React from 'react'
import '../../dist/css/main.css'

export default class Search extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form className='search' onSubmit={(event) => (this.props.handleSubmit(event))}>
        <label> Enter ZIP:
          <input name='zip' onChange={this.props.handleChange} />
        </label>
        <button type='submit'>Go</button>
      </form>
    )
  }

}
