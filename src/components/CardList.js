import React from 'react'
import { Card } from './Card'

export const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((robot, index) => (
        <Card key={index} {...robot} />
      ))}
    </>
  )
}
