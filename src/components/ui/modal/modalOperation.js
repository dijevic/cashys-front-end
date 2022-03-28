import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'

// SERVICES

// styled components 
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input'

import { Div, Span, H2, StyledDataPicker, P, ButtonContainer } from './styles'
import { useForm } from '../../../hooks/useForm';
import { useOperationStore, useUIStore, useUserStore } from '../../../store/store';
import { updateOperationService } from '../../../services/updateOperationService';
import { deleteOperationService } from '../../../services/deleteOperationService';
const { colors } = theme


export const ModalOperation = () => {

    const setOpenModal = useUIStore(state => state.setOpenModal)

    const activeOperation = useOperationStore(state => state.activeOperation)
    const updateOperation = useUserStore(state => state.updateOperation)
    const deleteOperation = useUserStore(state => state.deleteOperation)
    const setBalance = useUserStore(state => state.setBalance)


    const { date, id } = activeOperation
    const refDiv = useRef()

    const formInitialState = {
        description: activeOperation.description,
        amount: activeOperation.amount,

    }


    const [startDate, setStartDate] = useState(new Date());

    const [formValues, handleInputChange] = useForm(formInitialState)
    const { description, amount } = formValues



    const handleCloseModal = () => {
        setOpenModal()
    }

    const handleCloseOutSide = ({ target }) => {
        if (target === refDiv.current) {
            setOpenModal()
        }
    }

    const handleChangeDate = (date) => {
        setStartDate(date)
    }
    const handleDelete = () => {
        deleteOperationService(id, deleteOperation, setBalance, setOpenModal)

    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isEmpty(description.trim()) || validator.isEmpty(amount.trim())) {
            return toast.info('Cant update empty fields')
        }

        if (!validator.isNumeric(amount)) {
            return toast.error('try with numbers')
        }
        updateOperationService(formValues, id, updateOperation, setBalance)

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
                    <Buttom
                        padding="true"
                        content="Save"
                    />
                    <Buttom
                        onClick={handleDelete}
                        padding="true"
                        content="Delete"
                        type="button"
                        background={colors.burgundy}
                    />

                </ButtonContainer>

            </Form>
        </Div>
    )
}