/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
import { createStore, applyMiddleware } from 'redux'
import thunk, { ThunkMiddleware } from 'redux-thunk'

import { composeWithDevTools } from 'redux-devtools-extension'
import AppReducer, { RootReducer } from '../Reducers/AppReducer'
import { ActionsTypes } from '../Types/AddType'

const store = createStore(
    AppReducer,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<RootReducer, ActionsTypes>)),
)
export default store
