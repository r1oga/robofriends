import React from 'react'

export const Card = ({ email, name }) => {
  return (
    <div className='tc bg-light-blue dib br3 ma2 grow shadow-5 bw2'>
      <img
        src={`https://robohash.org/${name}?size=200x200&set=set3`}
        alt='robot'
      />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}
