import React, { memo } from 'react'
import UsersForm from '../components/UsersForm'
import Layout from '../components/Layout'
import { InferGetServerSidePropsType } from 'next'

const createUserForm = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { roles } = data
  
    return (
        <Layout template='50px 500px / 150px 550px' justify='center'>
            <UsersForm
                positionRow='2/3'
                positionColumn='1/3'
                width='400px'
                height='450px'
                roles={roles}
            />
        </Layout>
    )
}

export const getServerSideProps = async () => {
    const resp = await fetch(`http://localhost:5000/api/roles`)
    const data = await resp.json()
    return {
        props: { data },
    }
}

export default memo(createUserForm)
