import React from 'react'
import { MainBackground, Container } from '../coomon/div'
import { Link } from '../coomon/button/Link'
import { P, Span } from './styles'

export const NotFoundComponent = () => {
    return (
        <MainBackground>
            <Container>
                <P>404 </P>
                <P
                    rotate="true">
                    <span>:</span><span>|</span>
                </P>
                <Span>The page you are looking for does not exist </Span>
                <Link
                    padding="true"
                    to="/"
                >GO BACK HOME</Link>

            </Container>



        </MainBackground>
    )
}
