import { combineReducers } from 'redux'
import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from '../constants'

const initialStateSearch = { searchField: '' }
const initialStateRequest = { robots: [], pending: false, error: '' }

const search = (state = initialStateSearch, { type, payload } = {}) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload } // spread operator

    // pure function must return something, need case default
    default:
      return state
  }
}

const request = (state = initialStateRequest, { type, payload } = {}) => {
  switch (type) {
    case REQUEST_ROBOTS_PENDING:
      return { ...state, pending: true, error: '' }
    case REQUEST_ROBOTS_SUCCESS:
      return { ...state, robots: payload, pending: false, error: '' }
    case REQUEST_ROBOTS_FAILED:
      return { ...state, error: payload, pending: false }
    default:
      return state
  }
}

export const rootReducer = combineReducers({ search, request })
