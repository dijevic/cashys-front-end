// third  party imp
import React from 'react'

// hooks

// styled components 
import { theme } from '../../styles/theme'
import { Buttom } from '../coomon/buttom'
import { Div, Span, Ul } from './styles'
import { Operation } from './Operation'
const { colors } = theme



export const DashboardComponent = () => {



    return (

        <>
            <Span color={colors.black}>Take Control of your income and debts</Span>
            <Span> BALANCE : 10000 $</Span>

            <Div
                maxWidth="320">
                <Buttom padding content="Add Money" />
                <Buttom padding background={colors.burgundy} content="Debt Money" />
            </Div>

            <Div maxWidth="600" background shadow={false} direction="column">
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



        </>

    )

}