import React from 'react'
import { modalModes } from '../../config/modalModes'
import { useUIStore } from '../../store/store'
import { theme } from '../../styles/theme'
import { Button } from '../coomon/button'
import { Div } from './styles'

const { colors } = theme

export const DashboardActionButtons = React.memo(({ operationType }) => {
    const setopenModal = useUIStore(state => state.setOpenModal)
    const setModalMode = useUIStore(state => state.setModalMode)


    const handleIncome = () => {
        operationType.current = 'income'
        setopenModal()
        setModalMode(modalModes.handleOperation)


    }
    const handleDebt = () => {
        operationType.current = 'debt'
        setopenModal()
        setModalMode(modalModes.handleOperation)

    }
    return (

        <Div
            maxWidth="320">
            <Button
                onClick={handleIncome}

                padding
                content="Add Money"
            />

            <Button
                onClick={handleDebt}
                padding
                background={colors.burgundy}
                content="Debt Money"
            />

        </Div>
    )
})
