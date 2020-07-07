import React, { Component } from 'react'
import { CardList } from '../components/CardList'
import { Header } from '../components/Header'
import { Scroll } from '../components/Scroll'
import { SearchBox } from '../components/SearchBox'
import { ErrorBoundary } from '../components/ErrorBoundary'

export class App extends Component {
  // equivalent
  // state = {
  //   robots: robots
  // }
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users })
      })
  }

  onSearchChange = event => {
    const { robots } = this.state
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(event.target.value)
    )
    this.setState({ robots: filteredRobots })
  }
  render() {
    const { robots } = this.state
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <>
        <div className='tc'>
          <Header />
          <SearchBox onSearchChange={this.onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.state.robots} />
          </ErrorBoundary>
        </Scroll>
      </>
    )
  }
}
