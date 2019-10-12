import { combineReducers } from 'redux'
import HomeReducer from './Home/reducer'

const RootReducer = combineReducers({
    HomeState: HomeReducer
})
export default RootReducer;