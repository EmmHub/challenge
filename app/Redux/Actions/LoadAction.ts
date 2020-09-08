/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */

import { Dispatch } from 'redux'
import { ActionsTypes } from '../Types/AddType'
import { appThunk } from './EditAction'
import ClienteAxios from '../../config/axios-cliente'
import { USERS_LOADING_SUCCESS, USERS_LOADING_ERROR, START_USERS_LOADING } from '../Types/LoadType'
import { Iobject } from '../Reducers/UsersReducer'

export const UsersLoading = ( Page:number, usersPerPage:number ): appThunk => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch({ type: START_USERS_LOADING, payload: true })
        try {
            const resp = await ClienteAxios.get(`/users?limit=${usersPerPage}&offset=${Page}`)
            const data: Iobject = resp.data
            dispatch({ type: USERS_LOADING_SUCCESS, payload: data })
        } catch (error) {
            console.error('there was a problem')
            dispatch({ type: USERS_LOADING_ERROR, payload: true })
        }
    }
}
