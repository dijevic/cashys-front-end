import React from 'react'
import dayjs from 'dayjs'
import { useOperationStore, useUIStore } from '../../store/store'


import { PlusIcon } from '../coomon/icons/Plus'
import { MinusIcon } from '../coomon/icons/Minus'
import { Li, SpanIcon, P, DivOperation } from './styles'
import { modalModes } from '../../config/modalModes'

const { operationInfo } = modalModes

export const Operation = React.memo(({ amount, date, description, operation_Type, id }) => {

    const setopenModal = useUIStore(state => state.setOpenModal)
    const setActiveOperation = useOperationStore(state => state.setActiveOperation)
    const setModalMode = useUIStore(state => state.setModalMode)

    const parsedDate = dayjs(date).format("MM-DD-YYYY")
    console.log()

    const handleOpenModal = () => {
        setopenModal()
        setModalMode(operationInfo)
        setActiveOperation({ amount, date, description, operation_Type, id })
    }
    return (

        <Li onClick={handleOpenModal} operationtype={operation_Type}>
            <DivOperation>
                <SpanIcon operationtype={operation_Type}>
                    {
                        (operation_Type === 'income') ? <PlusIcon /> : <MinusIcon />
                    }

                </SpanIcon>

                <P>{description}
                    <span>{parsedDate}</span>

                </P>
            </DivOperation>
            <P>
                {amount}
            </P>

        </Li>

    )
})

