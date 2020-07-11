import React, { Component } from 'react'

export default class Button extends Component {
  state = { count: 0 }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true
    } else {
      return false
    }
  }

  increment = () => {
    this.setState(state => {
      return { count: state.count + 1 }
    })
  }

  render() {
    console.log('Button')
    return (
      <>
        <button color={this.props.color} onClick={this.increment}>
          Counter: {this.state.count}
        </button>
      </>
    )
  }
}
