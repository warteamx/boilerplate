import { combineReducers } from 'redux'
import messages from './messages'
import test from './test'

export const rootReducer = combineReducers({
  messages,
  test
})

export type RootState = ReturnType<typeof rootReducer>