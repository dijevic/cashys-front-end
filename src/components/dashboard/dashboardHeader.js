import React, { useEffect, useState } from 'react'
// services
import { getBalanceService } from '../../services/getBalance'

// hooks
import { useUserStore } from '../../store/store'
// styled components
import { theme } from '../../styles/theme'
import { Span } from './styles'
const { colors } = theme

export const DashboardHeader = React.memo(() => {

    const balance = useUserStore(state => state.balance)
    const setBalance = useUserStore(state => state.setBalance)

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
