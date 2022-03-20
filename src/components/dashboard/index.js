// third  party imp
import React from 'react'

// hooks

// styled components 
import { theme } from '../../styles/theme'
import { Buttom } from '../coomon/buttom'
import { Div, Span, Ul } from './styles'
import { Operation } from './Operation'
import { useOperationStore, useUIStore, useUserStore } from '../../store/store'
import { Modal } from '../ui/modal'
const { colors } = theme



export const DashboardComponent = () => {

    const modalState = useUIStore(state => state.modalState)
    const setUser = useUserStore(state => state.setUser)

    const balance = useUserStore(state => state.balance)
    const setopenModal = useUIStore(state => state.setOpenModal)
    const setOperationType = useOperationStore(state => state.setOperationType)


    const handleIncome = () => {
        setOperationType('income')
        setopenModal()
        setUser({ name: 'test' })

    }
    const handleDebt = () => {

        setOperationType('debt')
        setopenModal()


    }
    return (

        <>

            {
                (modalState) && <Modal />
            }
            <Span color={colors.black}>Take Control of your income and debts</Span>
            <Span> BALANCE : {balance} $</Span>

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

            <Div maxWidth="600" background shadow={false} direction="column">
                <Ul>
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                    <Operation />
                </Ul>



            </Div>



        </>

    )

}
