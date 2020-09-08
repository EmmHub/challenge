/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */


import { Dispatch, Action } from 'redux'
import { ActionsTypes } from '../Types/AddType'
import { ThunkAction } from 'redux-thunk'
import { RootReducer } from '../Reducers/AppReducer'
import ClienteAxios from '../../config/axios-cliente'
import { EDIT_USER_ERROR, EDIT_USER_SUCCESS } from '../Types/EditType'
import { Iuser } from '../Reducers/UsersReducer';
export type appThunk = ThunkAction<void, RootReducer, null, Action<string>>

export const editUser= (user:Iuser, id:string): appThunk => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        try {
           const resp = await ClienteAxios.put(`/users/${id}`, user)
           const data:Iuser = resp.data.user
          
            dispatch({ type: EDIT_USER_SUCCESS , payload:data})
        } catch (error) {
            console.error('hubo un error al editar el producto', error)
            dispatch({ type: EDIT_USER_ERROR, payload: true })
        }
    }
}

