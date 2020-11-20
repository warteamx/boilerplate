import { combineReducers } from 'redux'
import messages from './messages'
import test from './test'
import maps from './maps'

export const rootReducer = combineReducers({
  messages,
  maps,
  test
})

export type RootState = ReturnType<typeof rootReducer>