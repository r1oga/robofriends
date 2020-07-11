import React from 'react'
// import Button from '../components/Button'

export class Header extends React.Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false
  // }
  render() {
    console.log('Header')
    return (
      <>
        <h1 className='f1'>ROBOFRIENDS</h1>
        {/* <Button color='red' /> */}
      </>
    )
  }
}
