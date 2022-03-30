import React, { useEffect } from 'react'
// services
import { getBalanceService } from '../../services/getBalance'

// hooks
import { useBalanceStore } from '../../store/store'
// styled components
import { theme } from '../../styles/theme'
import { Span } from './styles'
const { colors } = theme

export const DashboardHeader = React.memo(() => {

    const balance = useBalanceStore(state => state.balance)
    const setBalance = useBalanceStore(state => state.setBalance)

    useEffect(() => {
        getBalanceService(setBalance)
    }, [setBalance])



    return (
        <>
            <Span color={colors.black}>Take Control of your incomes and debts</Span>
            <Span> BALANCE : {balance} $</Span>
        </>
    )
})
