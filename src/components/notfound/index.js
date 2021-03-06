import React from 'react'
import { MainBackground, Container } from '../coomon/div'
import { Link } from '../coomon/button/Link'
import { P, Span } from './styles'
import { ConfusedMoodIcon } from '../coomon/icons/ConfusedMoodIcon'
import { GoBackIcon } from '../coomon/icons/GoBackIcon'

export const NotFoundComponent = () => {
    return (
        <MainBackground>
            <Container>
                <P>404 </P>
                <ConfusedMoodIcon />
                <Span>The page you are looking for does not exist </Span>
                <Link
                    padding="true"
                    to="/"
                >
                    <GoBackIcon />

                </Link>

            </Container>



        </MainBackground>
    )
}
