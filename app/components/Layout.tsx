import React from 'react'
import styled from 'styled-components'

const Container = styled.div<any>`
    display: grid;
    align-items: ${({ align }) => align};
    grid-template: ${({ template }) => template};
    justify-items: ${({ justify }) => justify};
    justify-content: center;
    margin-top: 25px;
`

interface Ilayout {
    template: string
    justify?: string
    align?: string
    children?: any
}

const Layout = ({ template, children, justify, align }: Ilayout) => {
    return (
        <Container template={template} justify={justify} align={align}>
            {children}
        </Container>
    )
}

export default Layout
