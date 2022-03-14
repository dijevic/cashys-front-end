import React from 'react'

// styled components
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input'
import { Div, Span, H2 } from './styles'
const { colors } = theme

export const Modal = () => {

    return (

        <Div>
            <Form modal="true" background={colors.white}>
                <Span>
                    <Minimize />
                </Span>
                <H2>Create a Debt Operation </H2>

                <Input modal="true" type="text" placeholder="Concepto" />
                <Input modal="true" type="text" placeholder="Monto" />
                <Input modal="true" type="text" placeholder="Fecha" />
                <Input modal="true" type="text" placeholder="Tipo" />
                <Input modal="true" type="text" placeholder="categoria" />
                <Buttom padding="true" content="Save" />
            </Form>
        </Div>
    )
}