import React, { useState, useRef } from 'react'
import validator from 'validator'

// SERVICES
import { createOperationService } from '../../../services/createOperation';
// hooks
import { useForm } from '../../../hooks/useForm';
// STORE
import { useOperationStore, useUIStore, useUserStore } from '../../../store/store'
// styled components
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input'
import { Spinner } from '../../coomon/spinner';
import { Dropdown } from '../dropdown';
import { Div, Span, H2, StyledDataPicker, P } from './styles'
import { toast } from 'react-toastify';
const { colors } = theme




export const Modal = () => {
    const operationType = useOperationStore((state) => state.operationType)
    const setBalance = useUserStore((state) => state.setBalance)
    const addOperation = useUserStore((state) => state.addOperation)

    const initialState = {
        category_id: ''
    }


    const [startDate, setStartDate] = useState(new Date());
    const setopenModal = useUIStore(state => state.setOpenModal)
    const [optionSelected, setOptionSelected] = useState(initialState)

    const formInitialState = {
        description: '',
        amount: '',
        operation_Type: operationType,

    }

    const [formValues, handleInputChange] = useForm(formInitialState)
    const refDiv = useRef()

    const { description, amount, operation_Type } = formValues
    const { category_id } = optionSelected



    const handleCloseModal = () => {
        setopenModal()

    }
    const handleCloseOutSide = ({ target }) => {
        if (target === refDiv.current) {
            setopenModal()
        }
    }

    const handleChangeDate = (date) => {
        setStartDate(date)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isEmpty(description) || validator.isEmpty(amount)) {
            return toast.info('please complete the empty fields')
        }

        if (!validator.isNumeric(amount)) {
            return toast.info('try to submit a numeric amount :) ')

        }

        const data = {
            description,
            amount,
            operation_Type,
            category_id
        }
        createOperationService(data, setBalance, addOperation)
    }



    return (

        <Div ref={refDiv} onClick={handleCloseOutSide}>
            <Form
                onSubmit={handleSubmit}
                modal="true"
                background={colors.white}>
                <Span onClick={handleCloseModal}>
                    <Minimize />
                </Span>
                <H2>Create a Debt Operation </H2>
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
                <P>Type : {operationType}</P>
                <Dropdown setOptionSelected={setOptionSelected} placeholder="Category" />

                <Buttom padding="true" content="Save" />
            </Form>
        </Div>
    )
}