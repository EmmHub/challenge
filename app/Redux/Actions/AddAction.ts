import { Dispatch } from 'redux'
import { appThunk } from './EditAction'
import { ActionsTypes, ADD_USERS_SUCCESS, ADD_USERS_ERROR } from '../Types/AddType'
import ClienteAxios from '../../config/axios-cliente'
import { Iuser } from '../Reducers/UsersReducer'

/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */
/**                                                                            */

export const addUsers = (userAdd: Iuser): appThunk => {
    return async (dispatch: Dispatch<ActionsTypes>) => {
        try {
            const { data } = await ClienteAxios.post('/users', userAdd)
            const user: Iuser = data.user
            dispatch({
                type: ADD_USERS_SUCCESS,
                payload: user,
            })
        } catch (error) {
            console.error('there was a problem')
            dispatch({ type: ADD_USERS_ERROR, payload: true })
        }
    }
}
