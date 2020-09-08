/**                                                                            */

import { START_USERS_LOADING, USERS_LOADING_SUCCESS, USERS_LOADING_ERROR } from '../Types/LoadType'
import { ADD_USERS_SUCCESS, ADD_USERS_ERROR, ActionsTypes } from '../Types/AddType'
import { START_USER_DELETE, USER_DELETE_ERROR, USER_DELETE_SUCCESS } from '../Types/DeleteType'
import { START_EDIT_USER, EDIT_USER_ERROR, EDIT_USER_SUCCESS } from '../Types/EditType'

/**                                                                            */

export interface Istate {
    users: Iuser[]
    count: number
    error: boolean
    success: boolean | null
    loading: boolean
    userDelete: Iuser | null
    addUser: Iuser | null
}
export interface Iuser {
    id?: string
    first_name: string
    last_name?: string
    email: string
    roles: Irole[]
}
export interface Iobject {
    count: number
    users: Iuser[]
}
export interface Irole {
    name: string
    id: string
    description: string
}

export const inicialState: Istate = {
    users: [],
    count: 0,
    error: false,
    success: null,
    loading: false,
    userDelete: null,
    addUser: null,
}
const useReducer = (state = inicialState, action: ActionsTypes): Istate => {
    switch (action.type) {
        case START_USERS_LOADING:
            return {
                ...state,
                loading: action.payload,
                addUser: null,
            }

        case USERS_LOADING_SUCCESS:
            return {
                ...state,
                success: true,
                loading: null,
                users: action.payload.users,
                error: false,
                count: action.payload.count,
            }
        case USERS_LOADING_ERROR:
            return {
                ...state,
                loading: null,
                error: action.payload,
                success: null,
            }

        case ADD_USERS_SUCCESS:
            return {
                ...state,
                success: true,
                error: false,
                addUser: action.payload,
            }
        case EDIT_USER_ERROR:
        case ADD_USERS_ERROR:
            return {
                ...state,
                error: action.payload,
                success: null,
            }
        case START_USER_DELETE:
            return {
                ...state,
                userDelete: action.payload,
                loading: true,
            }
        case USER_DELETE_SUCCESS:
            return {
                ...state,

                users: state.users.filter((user) => user.id !== state.userDelete.id),
                success: action.payload,
                error: false,
                addUser: null,
                count: state.count - 1,
                loading: false,
            }
        case USER_DELETE_ERROR:
            return {
                ...state,
                error: action.payload,
                success: null,
            }
        case START_EDIT_USER:
            return {
                ...state,
                addUser: action.payload,
            }
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                success: true,
                addUser: action.payload,
            }

        default:
            return state
    }
}
export default useReducer
