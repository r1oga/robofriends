import React from 'react'
import { Card } from './Card'

export const CardList = ({ robots }) => {
  if (true) {
    // throw new Error('noooo')
  }
  console.log('CardList')
  return (
    <>
      {robots.map((robot, index) => (
        <Card key={index} {...robot} />
      ))}
    </>
  )
}
