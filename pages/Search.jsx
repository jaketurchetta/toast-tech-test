import React from 'react'

const Search = ({ handleChange, handleSubmit}) => (
  <form className='search' onSubmit={(event) => (handleSubmit(event))}>
    <label htmlFor='zip'>
      <input placeholder='Enter ZIP' className='bar' tabIndex='-1' onChange={handleChange} maxLength='5' />
    </label>
  </form>
)

export default Search
