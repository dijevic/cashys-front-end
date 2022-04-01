import React, { useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
// SERVICES
import { createOperationService } from '../../../services/createOperation';
// hooks
import { useForm } from '../../../hooks/useForm';
// STORE
import { useBalanceStore, useOperationStore, useUIStore } from '../../../store/store'
// styled components
import { theme } from '../../../styles/theme'
import { Button } from '../../coomon/button'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input'
import { Dropdown } from '../dropdown';
import { Span, H2, StyledDataPicker, P } from './styles'
import { SaveIcon } from '../../coomon/icons/SaveIcon';
const { colors } = theme

dayjs.extend(utc)


export const ModalCreateOperations = ({ operationType }) => {
    const addOperation = useOperationStore((state) => state.addOperation)
    const setBalance = useBalanceStore(state => state.setBalance)
    const setopenModal = useUIStore(state => state.setOpenModal)

    const initialState = {
        category_id: ''
    }


    const [startDate, setStartDate] = useState(new Date());
    const [optionSelected, setOptionSelected] = useState(initialState)

    const formInitialState = {
        description: '',
        amount: '',
        operation_Type: operationType,

    }

    const [formValues, handleInputChange] = useForm(formInitialState)

    const { description, amount, operation_Type } = formValues
    const { category_id, name: categoryName } = optionSelected



    const handleCloseModal = () => {
        setopenModal()

    }


    const handleChangeDate = (date) => {
        setStartDate(date)


    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isEmpty(description.trim()) || validator.isEmpty(amount.trim())) {
            return toast.info('please complete the empty fields')
        }

        if (!validator.isNumeric(amount)) {
            return toast.info('try to submit a numeric amount :) ')

        }
        if (Number(amount) === 0 || Number(amount) < 0) {
            return toast.info('try to submit an amount over 0 :) ')

        }

        const data = {
            description,
            amount,
            operation_Type,
            category_id,
            date: dayjs.utc(startDate).format()

        }
        createOperationService(data, setBalance, addOperation, categoryName)
    }



    return (


        <Form
            onSubmit={handleSubmit}
            modal="true"
            background={colors.white}>
            <Span onClick={handleCloseModal}>
                <Minimize />
            </Span>
            <H2>Creating {operationType} Operation </H2>
            <StyledDataPicker className="datepicker" selected={startDate} onChange={handleChangeDate} />
            <Input
                modal="true"
                maxLength={50}
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
            <Dropdown setOptionSelected={setOptionSelected} />

            <Button
                padding="true"
                content={<SaveIcon />} />
        </Form>

    )
}