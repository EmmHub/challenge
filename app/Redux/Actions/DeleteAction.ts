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
import { START_USER_DELETE, USER_DELETE_SUCCESS, USER_DELETE_ERROR } from '../Types/DeleteType'
import ClienteAxios from '../../config/axios-cliente'
import { Iuser } from '../Reducers/UsersReducer'

export const deleteUser = (user: Iuser): appThunk => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        dispatch({ type: START_USER_DELETE, payload: user })
        try {
            await ClienteAxios.delete(`/users/${user.id}`)
            dispatch({ type: USER_DELETE_SUCCESS, payload: true })
        } catch (error) {
            console.error('hubo un error al agregar el producto', error)
            dispatch({ type: USER_DELETE_ERROR, payload: true })
        }
    }
}
