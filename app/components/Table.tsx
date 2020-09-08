import React  from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import Pagination from './Pagination'
import DeleteIcon from '@material-ui/icons/Delete'
import DetailsIcon from '@material-ui/icons/Details'
import IconButton from '@material-ui/core/IconButton'
import Link from 'next/link'
import { deleteUser } from '../Redux/Actions/DeleteAction'
import { START_EDIT_USER } from '../Redux/Types/EditType'
import { Iuser } from '../Redux/Reducers/UsersReducer'



const Flex = styled.div`
    display: flex;
    flex-flow: column nowrap;
   
`

interface IusersTable {
    total: number
    setCurrentPage: any
    currentPage: any
    users: Iuser[]
}

const Table = ({ total, currentPage, setCurrentPage, users }: IusersTable) => {
    const dispatch = useDispatch()
    
    const previousPage = () => {
        const anterior = currentPage - 1
        if (currentPage === 0) return
        setCurrentPage(anterior)
    }
    const nextPage = () => {
        const siguiente = currentPage + 1
        if (siguiente === total) return
        setCurrentPage(siguiente)
    }
    const gotoPage = (value: number) => {
        console.log(value)
        if (value > 0 && value <= total) {
            setCurrentPage(value - 1)
        }
    }

    const handleEditUser = (user: Iuser) => {
        dispatch({ type: START_EDIT_USER, payload: user })
    }
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Roles</th>
                        <th>actions</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <th>{user.id}</th>
                            <th>{user.first_name}</th>
                            <th>{user.last_name}</th>
                            <th>{user.email}</th>
                            <th>
                                {user.roles.map((role) => (
                                    <Flex key={role.id}>
                                        <span>{role.name}</span>
                                    </Flex>
                                ))}
                            </th>

                            <th>
                                <IconButton onClick={() => handleEditUser(user)}>
                                    <Link href='/details/[id] ' as={`/details/${user.id}`}>
                                        <DetailsIcon />
                                    </Link>
                                </IconButton>

                                <IconButton onClick={() => dispatch(deleteUser(user))}>
                                    <DeleteIcon />
                                </IconButton>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination
                nextPage={nextPage}
                previousPage={previousPage}
                setCurrentPage={setCurrentPage}
                total={total}
                currentPage={currentPage}
                gotoPage={gotoPage}
            />
        </>
    )
}

export default Table
