// thyrt party imp
import React from 'react'


// styled components 
import { theme } from '../../styles/theme'
import { Buttom } from '../coomon/buttom'
import { MainBackground, Container } from '../coomon/div'
import { Div, Span, Ul } from './styles'
import { Operation } from './Operation'

const { colors } = theme

export const DashboardComponent = () => {


    return <MainBackground>

        <Container >
            <Span>Diego Vielma</Span>
            <Span>10000 $</Span>

            <Div maxWidth="320">
                <Buttom content="Add Money" />
                <Buttom background={colors.burgundy} content="Debt Money" />
            </Div>

            <Div maxWidth="600" background direction="column">
                <Ul>
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                </Ul>



            </Div>



        </Container>

    </MainBackground >
}