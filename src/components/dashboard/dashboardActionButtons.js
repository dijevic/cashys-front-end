import React from 'react'
import { modalModes } from '../../config/modalModes'
import { useUIStore } from '../../store/store'
import { theme } from '../../styles/theme'
import { Button } from '../coomon/button'
import { DebtArrowIcon } from '../coomon/icons/DebtArrowIcon'
import { IncomeArrowIcon } from '../coomon/icons/IncomeArrowIcon'
import { Div, P, ActionButtonContainer } from './styles'

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

            <ActionButtonContainer>
                <Button
                    onClick={handleIncome}
                    padding="true"
                    actionbutton="true"
                    content={<IncomeArrowIcon />}
                />
                <P
                    onClick={handleDebt}
                    actionbutton="true"
                    color={colors.white}>ADD INCOME</P>

            </ActionButtonContainer>

            <ActionButtonContainer>

                <Button
                    onClick={handleDebt}
                    padding="true"
                    actionbutton="true"
                    background={colors.burgundy}
                    content={<DebtArrowIcon />}
                />

                <P
                    onClick={handleDebt}
                    actionbutton="true"
                    color={colors.white}>ADD DEBT</P>

            </ActionButtonContainer>


        </Div>
    )
})
