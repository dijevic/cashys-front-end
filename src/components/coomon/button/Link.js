import React from 'react'
import { LinkButtom } from './LinkButtomStyled'

export const Link = ({ children, ...props }) => {
    return <LinkButtom {...props}>{children}</LinkButtom>
}
