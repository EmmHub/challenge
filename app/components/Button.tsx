import React, { memo } from 'react'
import styled from 'styled-components'

const ButtonPrimary = styled.button<any>`
    display: flex;
    align-items: center;
    background-color: ${({ color }) => color};
    border-radius: 10px;
    border: none;
    color: white;
    cursor: pointer;
    font-family: Zilla Slab, serif;
    font-size: 15px;
    font-weight: bold;
    height: 30px;
    justify-content: center;
    margin-top: 10px;
    outline: none;
    padding: 0;
    grid-row: ${({ positionRow }) => positionRow};
    grid-column: ${({ positionColumn }) => positionColumn};
    width: ${({ width }) => width};

    &:disabled {
        color: grey;
    }
`

interface Ibutton {
    redirect?: () => void
    BackGroundColor: string
    width: string
    text: string
    children: any
    positionRow?: string
    positionColumn?: string
    disabled?: boolean
}
const Button = ({
    redirect,
    BackGroundColor,
    width,
    text,
    children,
    positionRow,
    positionColumn,
    disabled,
}: Ibutton): JSX.Element => {
    return (
        <>
            <ButtonPrimary
                onClick={redirect}
                color={BackGroundColor}
                width={width}
                positionRow={positionRow}
                positionColumn={positionColumn}
                disabled={disabled}
            >
                {children}
                {text}
            </ButtonPrimary>
        </>
    )
}

export default memo(Button)
