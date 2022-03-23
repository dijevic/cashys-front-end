import React from 'react'
import dayjs from 'dayjs'
import { PlusIcon } from '../coomon/icons/Plus'
import { MinusIcon } from '../coomon/icons/Minus'
import { Li, SpanIcon, P, DivOperation } from './styles'
import { useUIStore } from '../../store/store'

export const Operation = React.memo(({ amount, date, description, operation_Type, uuid: id }) => {

    const setopenModal = useUIStore(state => state.setOpenModal)

    const parsedDate = dayjs(date).format("MM-DD-YYYY")
    const handleOpenModal = () => {
        setopenModal()
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

