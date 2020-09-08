/**                                                                            */

/**                                                                            */

/**                                                                            */


//import react
import React, { memo } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
//Container
const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #daddde solid 1px;
    flex-flow: column wrap;
    height: 60%;
    margin: 0 auto;
    width: 100%;
`

const H1 = styled.h1`
    color: #9ea1a1;
    cursor: pointer;
    font-family: 'Indie Flower', cursive;
    font-size: 30px;
`

const Header = (): JSX.Element => {
    console.log('header')
    return (
        <Div>
            <Link href='/'>
                <H1>CODE CHALLENGE SEA</H1>
            </Link>
        </Div>
    )
}

export default memo(Header)
