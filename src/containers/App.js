import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CardList } from '../components/CardList'
import { Header } from '../components/Header'
import { Scroll } from '../components/Scroll'
import { SearchBox } from '../components/SearchBox'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { setSearchField } from '../actions'

const mapStateToProps = state => {
  return {
    searchField: state.search.searchField
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value))
  }
}
class App extends Component {
  // equivalent
  // state = {
  //   robots: robots
  // }
  constructor() {
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ robots: users })
      })
  }

  render() {
    const { robots } = this.state
    const { searchField, onSearchChange } = this.props
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField)
    )
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <>
        <div className='tc'>
          <Header />
          <SearchBox onSearchChange={onSearchChange} />
        </div>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
