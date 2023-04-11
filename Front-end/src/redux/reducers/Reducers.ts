import { combineReducers } from 'redux'
import userReducer from './userReducer'


//Combinar todos os reducers que sera criado em apenas 1.
export default combineReducers({
    user:userReducer
})