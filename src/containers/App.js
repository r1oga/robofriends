import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CardList } from '../components/CardList'
import { Header } from '../components/Header'
import { Scroll } from '../components/Scroll'
import { SearchBox } from '../components/SearchBox'
import { ErrorBoundary } from '../components/ErrorBoundary'
import { setSearchField, requestRobots } from '../actions'

const mapStateToProps = ({
  search: { searchField },
  request: { robots, pending, error }
}) => {
  return {
    searchField,
    robots,
    pending,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
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
    this.props.onRequestRobots()
  }

  render() {
    const { searchField, onSearchChange, robots, error, pending } = this.props
    const filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchField)
    )
    return pending ? (
      <h1>Loading</h1>
    ) : error ? (
      <p>{error.toString()}</p>
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
