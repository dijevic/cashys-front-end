import React from 'react'
import { LinkButtom } from '../coomon/buttom/LinkButtomStyled'
import { Div, P, Span } from './styles'

export const NotFoundComponent = () => {
    return (
        <Div padding={false}>

            <P>404</P>
            <Span>The page you are looking for does not exist </Span>
            <LinkButtom to="/">GO BACK HOME</LinkButtom>


        </Div>
    )
}
