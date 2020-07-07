import React from 'react'
import { Card } from './Card'

export const CardList = ({ robots }) => {
  if (true) {
    // throw new Error('noooo')
  }
  return (
    <>
      {robots.map((robot, index) => (
        <Card key={index} {...robot} />
      ))}
    </>
  )
}
