import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-top: 5px;
`
const Flex = styled.div`
    display: flex;
`
const Pagination = ({ nextPage, previousPage, setCurrentPage, total, currentPage, gotoPage }) => {
    return (
        <Container>
            <Flex>
                
                <button
                    disabled={currentPage === 0 ? true : false}
                    onClick={() => setCurrentPage(0)}
                >
                    {'<<'}
                </button>
                <button disabled={currentPage === 0 ? true : false} onClick={previousPage}>
                    {'<'}
                </button>
                <button disabled={currentPage + 1 === total ? true : false} onClick={nextPage}>
                    {'>'}
                </button>
                <button
                    disabled={currentPage + 1 === total ? true : false}
                    onClick={() => setCurrentPage(total - 1)}
                >
                    {'>>'}
                </button>
            </Flex>
            <Flex>
                <span>
                    Page
                    <strong>
                        {' '}
                        {currentPage + 1} of {total}{' '}
                    </strong>
                </span>
            </Flex>
            <Flex>
                <span>
                    | Go to page:
                    <input
                        max={total}
                        min='1'
                        placeholder='page number'
                        onChange={(e) => {
                            const page = Number(e.target.value)
                            gotoPage(page)
                        }}
                    />
                </span>
            </Flex>
        </Container>
    )
}

export default Pagination
