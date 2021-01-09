import {combineReducers} from 'redux'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
    mainReducer
})

export type AppState = ReturnType<typeof rootReducer>

export default rootReducer