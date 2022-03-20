import React from 'react'
import { PlusIcon } from '../coomon/icons/Plus'
import { MinusIcon } from '../coomon/icons/Minus'
import { Li, SpanIcon, P } from './styles'
import { useUIStore } from '../../store/store'

export const Operation = () => {

    const setopenModal = useUIStore(state => state.setOpenModal)


    const handleOpenModal = () => {
        setopenModal()
    }
    return (

        <Li onClick={handleOpenModal}>
            <SpanIcon>
                <PlusIcon />
            </SpanIcon>

            <P>Operacion: 300000
                <span>12/12/12</span>

            </P>

        </Li>

    )
}

