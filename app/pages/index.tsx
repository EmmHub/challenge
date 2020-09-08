import { memo } from 'react'
import Layout from '../components/Layout'
import Button from '../components/Button'
import { useRouter } from 'next/router'
import AddIcon from '@material-ui/icons/Add'
import { useEffect, useState } from 'react'
import { UsersLoading } from '../Redux/Actions/LoadAction'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../Redux/Reducers/AppReducer'
import styled from 'styled-components'
import Spinner from '../components/Spinner'
import Table from '../components/Table'


const Styles = styled.div`
    padding: 1rem;
    grid-row: 2/3;
    grid-column: 1/3;
    width: 100%;
    table {
        border-collapse: collapse;
        width: 100%;
        box-shadow: 0px 4px 40px 4px rgba(112, 108, 112, 0.98);

        thead {
            color: #fff;
            font-size: 14px;
            font-family: 'Zilla Slab', serif;

            tr {
                background-color: blue;

                th {
                    padding: 15px;
                }
            }
        }
    }

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
const H2 = styled.h2`
    text-align: center;
    color: #8a8888;
    font-size: 20px;
    font-family: 'Zilla Slab', serif;
    grid-row: 2/3;
    grid-column: 1/3;
`
export const Flex = styled.div`
    display: flex;
    flex-flow: column nowrap;
`
const Home = () => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { users, count, loading, userDelete } = useSelector((state: RootReducer) => state.data)

    const [currentPage, setCurrentPage] = useState<number>(0)
    const [usersPerPage] = useState<number>(10)
    const Page: number = currentPage * usersPerPage
    const total: number = Math.ceil(count / usersPerPage)

    useEffect(() => {
        const loading = () => dispatch(UsersLoading(Page, usersPerPage))
        loading()
    }, [currentPage, userDelete])

    return (
        <>
            {loading ? (
                <Spinner />
            ) : (
                users.length >= 0 && (
                    <Layout
                        template='  50px  900px /900px 120px    '
                        justify='center'
                        align='start'
                    >
                        <Button
                            redirect={() => router.push('/createUserForm')}
                            BackGroundColor=' #1bbc86 '
                            width='100%'
                            text='create users'
                            positionRow='1/2'
                            positionColumn='2/3'
                        >
                            <AddIcon />
                        </Button>

                        {users.length === 0 ? (
                            <H2> No users </H2>
                        ) : (
                            <Styles>
                                <Flex>
                                    <H2>users list</H2>
                                    <Table
                                        setCurrentPage={setCurrentPage}
                                        total={total}
                                        currentPage={currentPage}
                                        users={users}
                                    />
                                </Flex>
                            </Styles>
                        )}
                    </Layout>
                )
            )}
        </>
    )
}
export default memo(Home)
