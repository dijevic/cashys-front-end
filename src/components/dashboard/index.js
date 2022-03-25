// third  party imp
import React, { useEffect, useState } from 'react'

// hooks

// styled components 
import { theme } from '../../styles/theme'
import { Buttom } from '../coomon/buttom'
import { Div, Span, Ul } from './styles'
import { Operation } from './Operation'
import { useOperationStore, useUIStore, useUserStore } from '../../store/store'
import { Modal } from '../ui/modal'
import { getOperationsService } from '../../services/getOperations'
import { Spinner } from '../coomon/spinner'
import { getBalanceService } from '../../services/getBalance'
import { getCategoriesService } from '../../services/getCategories'
import { toast } from 'react-toastify'
const { colors } = theme



export const DashboardComponent = () => {

    const modalState = useUIStore(state => state.modalState)
    const setOperations = useUserStore(state => state.setOperations)
    const setCategories = useUserStore(state => state.setCategories)
    const operations = useUserStore(state => state.operations)

    const [loading, setLoading] = useState(false)
    const balance = useUserStore(state => state.balance)
    const setBalance = useUserStore(state => state.setBalance)

    const setopenModal = useUIStore(state => state.setOpenModal)
    const setOperationType = useOperationStore(state => state.setOperationType)


    useEffect(() => {

        getBalanceService(setLoading, setBalance)
        getOperationsService(setOperations, setLoading)
        getCategoriesService(setLoading, setCategories)

    }, [setOperations, setCategories, setBalance])



    const handleIncome = () => {
        setOperationType('income')
        setopenModal()


    }
    const handleDebt = () => {
        setOperationType('debt')
        setopenModal()

    }

    if (loading) {
        return (
            <Spinner />
        )
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
                    {
                        operations.map(({ amount, date, description, operation_Type, uuid: id }) =>
                            <Operation
                                amount={amount}
                                date={date}
                                description={description}
                                operation_Type={operation_Type}
                                id={id}
                                key={id}
                            />

                        )
                    }

                </Ul>



            </Div>



        </>

    )

}
