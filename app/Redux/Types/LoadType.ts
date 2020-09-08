import { Iobject } from '../Reducers/UsersReducer';


//
//
// 
// 

const START_USERS_LOADING = 'START_USERS_LOADING'

const USERS_LOADING_SUCCESS = ' USERS_LOADING_SUCCESS'

const USERS_LOADING_ERROR = 'USERS_LOADING_ERROR'

interface StartUsersLoading {
    type: typeof START_USERS_LOADING
    payload: boolean
}
interface UsersLoadingSuccess {
    type: typeof USERS_LOADING_SUCCESS
    payload: Iobject
}
interface UsersLoadingError {
    type: typeof USERS_LOADING_ERROR
    payload: boolean
}

export type IusersLoading = StartUsersLoading | UsersLoadingSuccess | UsersLoadingError

export { START_USERS_LOADING, USERS_LOADING_SUCCESS, USERS_LOADING_ERROR }
