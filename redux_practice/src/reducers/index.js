// Este archivo contendrá todos los reducers
import { combineReducers } from 'redux'
import artists from './artist_reducer'

const rootReducer = combineReducers({
  artists
})
export default rootReducer
