import { combineReducers } from 'redux'
import { CHANGE_SEARCH_FIELD } from '../constants'

const initialState = { searchField: '' }

const search = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: payload } // spread operator

    // pure function must return something, need case default
    default:
      return state
  }
}

export const rootReducer = combineReducers({ search })
