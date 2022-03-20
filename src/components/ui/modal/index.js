import React, { useState, useRef } from 'react'
import 'react-dropdown/style.css';
import { useForm } from '../../../hooks/useForm';

// STORE
import { useOperationStore, useUIStore } from '../../../store/store'
// styled components
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input'
import { Dropdown } from '../dropdown';
import { Div, Span, H2, StyledDataPicker, P } from './styles'
const { colors } = theme




export const Modal = () => {


    const initialState = {
        value: ''
    }
    const formInitialState = {
        description: '',
        amount: '',
        type: ''
    }
    const [startDate, setStartDate] = useState(new Date());
    const setopenModal = useUIStore(state => state.setOpenModal)

    const operationType = useOperationStore((state) => state.operationType)
    const [optionSelected, setOptionSelected] = useState(initialState)

    const [formValues, handleInputChange] = useForm(formInitialState)
    const refDiv = useRef()

    const { description, amount, type } = formValues


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

    return (

        <Div ref={refDiv} onClick={handleCloseOutSide}>
            <Form modal="true" background={colors.white}>
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