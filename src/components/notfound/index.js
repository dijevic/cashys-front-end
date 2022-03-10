import React from 'react'
import { LinkButtom } from '../coomon/buttom/LinkButtomStyled'
import { Div, P, Span, Container } from './styles'

export const NotFoundComponent = () => {
    return (
        <Div padding={false}>
            <Container>
                <P>404 </P>
                <P rotate="true">:(</P>
                <Span>The page you are looking for does not exist </Span>
                <LinkButtom to="/">GO BACK HOME</LinkButtom>

            </Container>



        </Div>
    )
}
