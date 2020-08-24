import React from 'react'
import '../../dist/css/main.css'

const Search = ({ handleChange, handleSubmit}) => (
  <form className='search' onSubmit={(event) => (handleSubmit(event))}>
    <input type='submit' className='bar' tabIndex='-1' onChange={handleChange}/>
  </form>
)

export default Search
