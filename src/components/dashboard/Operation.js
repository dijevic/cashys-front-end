import React from 'react'
import { PlusIcon } from '../coomon/icons/Plus'
import { MinusIcon } from '../coomon/icons/Minus'
import { Li, SpanIcon, P } from './styles'

export const Operation = () => {
    return (

        <Li>
            <SpanIcon>
                <PlusIcon />
            </SpanIcon>

            <P>Operacion: 300000
                <span>12/12/12</span>

            </P>

        </Li>

    )
}
