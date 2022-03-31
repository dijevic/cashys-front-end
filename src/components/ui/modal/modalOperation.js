import React, { useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'
import dayjs from 'dayjs'
// SERVICES

// styled components 
import { theme } from '../../../styles/theme'
import { Button } from '../../coomon/button'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input'

import { Span, H2, StyledDataPicker, P, ButtonContainer } from './styles'
import { useForm } from '../../../hooks/useForm';
import { useBalanceStore, useOperationStore, useUIStore } from '../../../store/store';
import { updateOperationService } from '../../../services/updateOperationService';
import { deleteOperationService } from '../../../services/deleteOperationService';
const { colors } = theme


export const ModalOperation = () => {

    const setOpenModal = useUIStore(state => state.setOpenModal)

    const activeOperation = useOperationStore(state => state.activeOperation)
    const updateOperation = useOperationStore(state => state.updateOperation)
    const deleteOperation = useOperationStore(state => state.deleteOperation)
    const setBalance = useBalanceStore(state => state.setBalance)

    const { id, category } = activeOperation

    const date = dayjs(activeOperation.date).toDate()
    const formInitialState = {
        description: activeOperation.description,
        amount: activeOperation.amount,

    }


    const [startDate, setStartDate] = useState(date);


    const [formValues, handleInputChange] = useForm(formInitialState)
    const { description, amount } = formValues



    const handleCloseModal = () => {
        setOpenModal()
    }



    const handleChangeDate = (date) => {
        setStartDate(date)
    }
    const handleDelete = () => {
        deleteOperationService(id, deleteOperation, setBalance, setOpenModal)

    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isEmpty(description.trim()) || validator.isEmpty((amount + '').trim())) {
            return toast.info('Cant update empty fields')
        }

        if (isNaN(amount)) {
            return toast.error('try with numbers')
        }

        const data = {
            description,
            amount,
            date: startDate

        }
        updateOperationService(data, id, updateOperation, setBalance, category)

    }




    return (


        <Form
            onSubmit={handleSubmit}
            modal="true"
            background={colors.white}>
            <Span onClick={handleCloseModal}>
                <Minimize />
            </Span>
            <H2>Your Operation </H2>
            <StyledDataPicker className="datepicker" selected={startDate} onChange={handleChangeDate} />

            <Input
                modal="true"
                type="text"
                placeholder="Concept"
                name="description"
                value={description}
                autoComplete="off"
                onChange={handleInputChange}
            />
            <Input
                modal="true"
                type="text"
                placeholder="Mount"
                name="amount"
                value={amount}
                onChange={handleInputChange}
            />
            <P>Type :{activeOperation.operation_Type}</P>
            <P>Category :{activeOperation.category}</P>
            <ButtonContainer>
                <Button
                    padding="true"
                    content="Save"
                />
                <Button
                    onClick={handleDelete}
                    padding="true"
                    content="Delete"
                    type="button"
                    background={colors.burgundy}
                />

            </ButtonContainer>

        </Form>

    )
}