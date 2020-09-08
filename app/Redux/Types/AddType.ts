import { IusersLoading } from './LoadType'
import { IdeleteUser } from './DeleteType'
import { IeditUser } from './EditType'
import { Iuser } from '../Reducers/UsersReducer';
//
//
//
//
//

export const ADD_USERS_SUCCESS = 'ADD_USERS_SUCCESS'
export const ADD_USERS_ERROR = 'ADD_USERS_ERROR'




interface AddUsersSuccess {
    type: typeof ADD_USERS_SUCCESS
    payload: Iuser
}
interface AddUsersError {
    type: typeof ADD_USERS_ERROR
    payload: boolean
}

type IaddUsers =  AddUsersSuccess | AddUsersError

export type ActionsTypes = IusersLoading | IaddUsers | IdeleteUser | IeditUser
