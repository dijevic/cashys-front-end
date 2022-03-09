import React from 'react'
import { StyledForm } from './styles'

export const Form = ({ children, ...props }) => {
    return (
        <StyledForm {...props}  >{children}</StyledForm>
    )
}
