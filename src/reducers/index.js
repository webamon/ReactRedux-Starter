import { combineReducers } from 'redux'
import ReducerUSers from './reducer_users'

const rootReducer = combineReducers({
  users: ReducerUSers,
})

export default rootReducer
