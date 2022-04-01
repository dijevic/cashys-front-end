import React from 'react'
import { MainBackground, Container } from '../coomon/div'
import { Link } from '../coomon/button/Link'
import { P, Span } from './styles'
import { ConfusedIcon } from '../coomon/icons/ConfusedIcon'

export const NotFoundComponent = () => {
    return (
        <MainBackground>
            <Container>
                <P>404 </P>
                <ConfusedIcon />
                <Span>The page you are looking for does not exist </Span>
                <Link
                    padding="true"
                    to="/"
                >GO BACK HOME</Link>

            </Container>



        </MainBackground>
    )
}
