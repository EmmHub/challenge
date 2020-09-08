import React from 'react'
import styled from 'styled-components'

const Loading = styled.p`
    color: blue;
    text-align: center;
    font-size: 20px;
`

export default function Spinner() {
    return (
        <div>
            <Loading>Loading...</Loading>
        </div>
    )
}
