import React, {  useState, memo } from 'react'
import { Iuser, Irole } from '../Redux/Reducers/UsersReducer'
import { useForm } from 'react-hook-form'
import styled, { keyframes } from 'styled-components'
import SaveIcon from '@material-ui/icons/Save'
import Button from './Button'
import { editUser } from '../Redux/Actions/EditAction'
import { useDispatch } from 'react-redux'


const P = styled.span`
    color: red;
    font-size: 15px;
    margin-left: 10px;
    padding: 0px;
`
const animationName = keyframes`
  0% {  height: 0px ; }
  100% {  height: 150px ; }

`

const ContainerFlex = styled.form<any>`
    display: grid;
    grid-template: 100px 50px / repeat(2, 400px) 200px;
    column-gap: 20px;
    margin: 0;
    border: 2px solid lightgrey;
    width: 100%;
    animation: ${animationName} 2s ease both;
    grid-row: 3/4;
    grid-column: 1/3;
    padding: 10px 40px;
    border-radius: 15px;
    margin-top: 25px;
    overflow: hidden;

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

const Input = styled.input`
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

type submit = (data: Iuser) => void

const EditForm = ({ user, setFormState, roles }): JSX.Element => {
    // dispatch
    const dispatch = useDispatch()

    const [disabled, setdisabled] = useState(true)

    // Redux state
    const { register, handleSubmit, errors } = useForm<IFormInput>({ mode: 'onChange' })

    // handle submit function
    const submitForm: submit = (data: Iuser) => {
        dispatch(editUser(data, user.id))

        setdisabled(true)
        setFormState(false)
    }

    return (
        <ContainerFlex onSubmit={handleSubmit(submitForm)}>
            <Containerform>
                <ContainerFlex2>
                    <label htmlFor='FirstName'>First name </label>
                    <Input
                        onChange={() => setdisabled(false)}
                        type='text'
                        name='first_name'
                        placeholder='First name'
                        defaultValue={user.first_name}
                        ref={register({
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
                        onChange={() => setdisabled(false)}
                        type='text'
                        name='last_name'
                        placeholder='Last name'
                        defaultValue={user.last_name}
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
                    readOnly
                    type='email'
                    name='email'
                    placeholder='Email'
                    defaultValue={user.email}
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
                <label htmlFor='Role'>Roles </label>
                <select
                    onChange={() => setdisabled(false)}
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
            <Button disabled={disabled} text='save' BackGroundColor='#449DC3' width='40%'>
                <SaveIcon />
            </Button>
        </ContainerFlex>
    )
}

export default memo(EditForm)
