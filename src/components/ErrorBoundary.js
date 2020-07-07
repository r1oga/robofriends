import React, { Component } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }
  render() {
    return this.state.hasError ? <h1>Oopps</h1> : this.props.children
  }
}
