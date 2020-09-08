import React, { useState } from 'react'
import styled from 'styled-components'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import { Iuser } from '../Redux/Reducers/UsersReducer'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Redux/Actions/DeleteAction'
import { useRouter } from 'next/router'
import EditForm from './EditForm'
import { RootReducer } from '../Redux/Reducers/AppReducer'
import { Flex } from '../pages/index';

const Container = styled.div<any>`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    /* height: 100%; */
    grid-row: ${({ positionRow }) => positionRow};
    grid-column: ${({ positionColumn }) => positionColumn};

    h2 {
        text-align: center;
        color: #8a8888;
        font-size: 20px;
        font-family: 'Zilla Slab', serif;
    }
`

const Table = styled.table`
    width: 100%;
    box-shadow: 0px 4px 40px 4px rgba(112, 108, 112, 0.98);

    border-collapse: collapse;
  
    tbody {
        padding: 100px;
        font-size: 12px;
        font-family: Zilla Slab, serif;

        tr {
            border-bottom: 1px solid #d4dad5;
        }

        tr:nth-of-type(even) {
            background-color: #fcfcfc;
        }

        th {
            padding: 10px;
            color: #8a8888;
        }

        &:last-child {
            border-bottom: 1.6px solid blue;
        }
    }
`
const Thead = styled.thead`
    color: #fff;
    font-size: 14px;
    font-family: 'Zilla Slab', serif;

    tr {
        background-color: blue;

        th {
            padding: 15px;
        }
    }
`
const UserDetails = ({ roles }) => {
    // redux state properties
    const { addUser } = useSelector((state: RootReducer) => state.data)
    //
    const dispatch = useDispatch()
    //
    const router = useRouter()
    //
    const [formState, setFormState] = useState<boolean>(false)

    if (!addUser) return null

    // delete  dispatch
    const handleDelete = (user: Iuser) => {
        dispatch(deleteUser(user))
        router.push('/')
    }

    return (
        <>
            <Container>
                <h2>User details</h2>

                <Table>
                    <Thead>
                        <tr>
                            <th>id</th>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Roles</th>
                            <th>actions</th>
                        </tr>
                    </Thead>

                    <tbody>
                        <tr>
                            <th>{addUser.id}</th>
                            <th>{addUser.first_name}</th>
                            <th>{addUser.last_name}</th>
                            <th>{addUser.email}</th>
                            <th>
                                {addUser.roles.map((role) => (
                                    <Flex key={role.id}>
                                        <span>{role.name}</span>
                                    </Flex>
                                ))}
                            </th>

                            <th>
                                <IconButton onClick={() => setFormState(!formState)}>
                                    <EditIcon />
                                </IconButton>
                                <IconButton onClick={() => handleDelete(addUser)}>
                                    <DeleteIcon />
                                </IconButton>
                            </th>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            {formState && <EditForm user={addUser} setFormState={setFormState} roles={roles} />}
        </>
    )
}

export default UserDetails
