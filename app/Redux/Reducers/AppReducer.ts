/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
import { combineReducers } from 'redux'
import useReducer from './UsersReducer';


const AppReducer = combineReducers({
    data: useReducer 
})

export type RootReducer = ReturnType<typeof AppReducer>
export default AppReducer
