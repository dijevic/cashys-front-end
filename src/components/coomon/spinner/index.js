import React from 'react'

// styled components
import { DotComponent } from '../dot'
import { Span, P } from './styles'
import { Container, MainBackground } from '../div'



export const Spinner = () => {
    return (
        <MainBackground>
            <Container direction="row">
                <Span>
                    <DotComponent spinner="true" />
                    <DotComponent spinner="true" />
                    <DotComponent spinner="true" />
                </Span>
                <P>Loading ...</P>

            </Container>



        </MainBackground>

    )
}
