import { Iuser } from '../Reducers/UsersReducer';
//
//
//
//
//




//
const START_USER_DELETE = 'START_USER_DELETE'
const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS'
const USER_DELETE_ERROR = 'USER_DELETE_ERROR'

interface StartUserDelete {
    type: typeof START_USER_DELETE
    payload: Iuser
}
interface UserDeleteSuccess {
    type: typeof USER_DELETE_SUCCESS
    payload: boolean
}

interface UserDeleteError {
    type: typeof USER_DELETE_ERROR
    payload: boolean
}

export type IdeleteUser =
    | StartUserDelete
    | UserDeleteSuccess
    | UserDeleteError
export { START_USER_DELETE, USER_DELETE_SUCCESS, USER_DELETE_ERROR }
