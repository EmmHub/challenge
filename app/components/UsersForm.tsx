import React, { memo } from 'react'
import { Iuser, Irole } from '../Redux/Reducers/UsersReducer'
import { useForm } from 'react-hook-form'
import { addUsers } from '../Redux/Actions/AddAction'
import { useRouter } from 'next/router'
import { RootReducer } from '../Redux/Reducers/AppReducer'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import AddIcon from '@material-ui/icons/Add'
import Button from './Button'

export const P = styled.span`
    color: red;
    font-size: 15px;
    margin-left: 10px;
    padding: 0px;
`

const ContainerFlex = styled.form<any>`
    display: flex;
    flex-flow: column nowrap;
    margin: 0;
    border: 2px solid lightgrey;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    grid-row: ${({ positionRow }) => positionRow};
    grid-column: ${({ positionColumn }) => positionColumn};
    padding: 10px 40px;
    border-radius: 15px;
    margin-top: 25px;

    h2 {
        font-size: 15px;
        color: #7e797a;
        text-align: center;
    }
`
const ContainerFlex2 = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: 115px;
    label {
        font-size: 13px;
        color: #7e797a;
        margin: 15px 10px 5px;
    }

    select {
        appearance: none;
        border: 2px solid lightgrey;
    }

    input {
        padding: 10px;
        border-radius: 7px;
        outline: none;
        appearance: none;
        border: 1px solid lightgrey;
    }
`

const Containerform = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    width: 100%;
`

export const Input = styled.input`
    padding: 10px;
    border-radius: 7px;
    outline: none;
    border: 1px solid lightgrey;
    appearance: none;
    width: 160px;
`

interface IFormInput {
    first_name: String
    last_name: String
    email: String
    roles: Irole
}

interface Iform {
    positionRow: string
    positionColumn: string
    width: string
    height: string
    roles:Irole[]
}
type FormEvents = React.FormEvent<HTMLFormElement>
type submit = (data: Iuser, e: FormEvents) => void

const UsersForm = ({ positionRow, positionColumn, width, height,roles }: Iform): JSX.Element => {
   
    console.log('rendrerizo')
    const dispatch = useDispatch()

    const router = useRouter()

    // // redux state properties
    const {  addUser } = useSelector((state: RootReducer) => state.data)

   if (addUser !== null){
            router.push("/details/[id]",`/details/${addUser.id}`)
        }
  

    //
    const { register, handleSubmit, errors } = useForm<IFormInput>()

    // handle submit function
    const submitForm: submit = (data: Iuser, e: FormEvents) => {
        dispatch(addUsers(data))
        e.target.reset()
        
    }

    return (
        <>
            <Button
                redirect={() => router.push('/')}
                text='Back home'
                BackGroundColor='#797F81 '
                width='100%'
            >
                <ArrowBackIosIcon />
            </Button>

            <ContainerFlex
                positionRow={positionRow}
                positionColumn={positionColumn}
                width={width}
                height={height}
                onSubmit={handleSubmit(submitForm)}
            >
                <h2>add user</h2>
                <Containerform>
                    <ContainerFlex2>
                        <label htmlFor='FirstName'>First name </label>
                        <Input
                            type='text'
                            name='first_name'
                            placeholder='First name'
                            ref={register({
                                required: { value: true, message: 'required' },
                                minLength: { value: 2, message: 'at least 2 characters ' },
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'invalid',
                                },
                            })}
                        />
                        <P>{errors.first_name && (errors.first_name as any).message}</P>
                    </ContainerFlex2>
                    <ContainerFlex2>
                        <label htmlFor='Last name'>Last name </label>
                        <Input
                            type='text'
                            name='last_name'
                            placeholder='Last name'
                            ref={register({
                                minLength: { value: 2, message: 'at least 2 characters ' },
                                pattern: {
                                    value: /^[A-Za-z]+$/i,
                                    message: 'invalid',
                                },
                            })}
                        />
                        <P>{errors.last_name && (errors.last_name as any).message}</P>
                    </ContainerFlex2>
                </Containerform>
                <ContainerFlex2>
                    <label htmlFor='Email'>Email </label>
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        ref={register({
                            required: { value: true, message: 'required' },
                            pattern: {
                                value: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                                message: 'invalid email',
                            },
                        })}
                    />
                    <P>{errors.email && (errors.email as any).message}</P>
                </ContainerFlex2>
                <ContainerFlex2>
                    <label htmlFor='Role'>Role </label>
                    <select
                        multiple
                        size={3}
                        name='roles'
                        ref={register({
                            required: { value: true, message: 'required' },
                        })}
                    >
                        {roles &&
                            roles.map((role) => (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            ))}
                    </select>
                    <P>{errors.roles && (errors.roles as any).message}</P>
                </ContainerFlex2>
                <Button text='Add User' BackGroundColor='red' width='100%'>
                    <AddIcon />
                </Button>
            </ContainerFlex>
        </>
    )
}

export default memo(UsersForm)
