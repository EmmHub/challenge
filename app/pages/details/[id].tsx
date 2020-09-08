import React, { memo } from 'react'
import { useRouter } from 'next/router'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import UserDetails from '../../components/UserDetails'
import { InferGetServerSidePropsType } from 'next'

const Detail = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()
    const { roles } = data
    return (
        <Layout template=' 50px 180px  200px / 150px  900px  ' justify='center' align='start'>
            <Button
                redirect={() => router.push('/')}
                BackGroundColor='#797F81'
                width='100%'
                text='back home'
                positionRow='1/2'
                positionColumn='1/2'
            >
                <ArrowBackIosIcon />
            </Button>
            <UserDetails roles={roles} />
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
export default memo(Detail)
