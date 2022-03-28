import React from 'react'
import { modalModes } from '../../config/modalModes'
import { useOperationStore, useUIStore } from '../../store/store'
import { theme } from '../../styles/theme'
import { Buttom } from '../coomon/buttom'
import { Div } from './styles'

const { colors } = theme

export const DashboardActionButtons = React.memo(() => {
    const setopenModal = useUIStore(state => state.setOpenModal)
    const setModalMode = useUIStore(state => state.setModalMode)
    const setOperationType = useOperationStore(state => state.setOperationType)


    const handleIncome = () => {
        setOperationType('income')
        setopenModal()
        setModalMode(modalModes.handleOperation)


    }
    const handleDebt = () => {
        setOperationType('debt')
        setopenModal()
        setModalMode(modalModes.handleOperation)

    }
    return (

        <Div
            maxWidth="320">
            <Buttom
                onClick={handleIncome}

                padding
                content="Add Money"
            />

            <Buttom
                onClick={handleDebt}
                padding
                background={colors.burgundy}
                content="Debt Money"
            />

        </Div>
    )
})
