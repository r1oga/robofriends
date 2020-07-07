import React from 'react'

export const SearchBox = ({ onSearchChange }) => {
  return (
    <input
      type='search'
      palceholder='robot'
      className='pa2'
      onChange={onSearchChange}
    />
  )
}
