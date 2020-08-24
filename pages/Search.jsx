import React from 'react'
import '../client/dist/css/main.css'

const Search = ({ handleChange, handleSubmit}) => (
  <form className='search' onSubmit={(event) => (handleSubmit(event))}>
    <label htmlFor='zip'></label>
    <input placeholder='Enter ZIP' className='bar' tabIndex='-1' onChange={handleChange} maxLength='5' />
  </form>
)

export default Search
