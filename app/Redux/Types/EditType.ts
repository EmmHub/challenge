import { Iuser } from '../Reducers/UsersReducer';
//
//
//
//



//
const START_EDIT_USER = 'START_EDIT_USER'
const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
const EDIT_USER_ERROR = 'EDIT_USER_ERROR'

interface StartEditUser {
    type: typeof START_EDIT_USER
    payload: Iuser
}
interface EditUserSucces {
    type: typeof EDIT_USER_SUCCESS
    payload: Iuser
}
interface EditUserError {
    type: typeof EDIT_USER_ERROR
    payload: boolean
}

export type IeditUser = StartEditUser | EditUserSucces | EditUserError
export { START_EDIT_USER, EDIT_USER_SUCCESS, EDIT_USER_ERROR }
