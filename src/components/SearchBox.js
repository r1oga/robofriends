import React from 'react'

export const SearchBox = ({ onSearchChange }) => {
  console.log('SearchBox')
  return (
    <label>
      Search
      <input
        type='search'
        palceholder='robot'
        className='pa2'
        onChange={onSearchChange}
      />
    </label>
  )
}
