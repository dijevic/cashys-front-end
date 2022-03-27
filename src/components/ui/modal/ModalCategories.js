import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'
import { useForm } from '../../../hooks/useForm';
import { useUIStore } from '../../../store/store';

// SERVICES

// styled components 
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Input } from '../../coomon/input';
import { Dropdown } from '../dropdown';

import { Div, Span, H2, ButtonContainer, } from './styles'
const { colors } = theme





export const ModalCategories = () => {

    const setOpenModal = useUIStore(state => state.setOpenModal)

    const initialFormState = {
        name: ''
    }
    const initialState = {
        category_id: ''
    }



    const [formValues, handleInputChange, reset] = useForm(initialFormState)
    const { name } = formValues

    const createRef = useRef(false)
    const updateRef = useRef(false)
    const refDiv = useRef()

    const [optionSelected, setOptionSelected] = useState(initialState)

    const [categoryCrudOption, setCategoryCrudOption] = useState(false)
    const [showInput, setShowInput] = useState(false)

    const handleCloseModal = () => {
        setOpenModal()
    }

    const handleCloseOutSide = ({ target }) => {
        if (target === refDiv.current) {
            setOpenModal()
        }
    }


    const handleDelete = () => {
        console.log('dshgfhsjh')

    }
    const handleCategoryCrud = () => {
        console.log('dshgfhsjh')

    }

    const handleShowInput = ({ target }) => {
        setShowInput(!showInput)

        if (target === createRef.current || target === updateRef.current) {
            setCategoryCrudOption(target.name)

        }


    }



    const handleSubmit = (e) => {
        console.log(';e')

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
                <H2>Categories </H2>

                <Dropdown setOptionSelected={setOptionSelected} />

                {

                    (showInput)
                        ?
                        <>
                            <Input
                                modal="true"
                                type="text"
                                placeholder="Category Name"
                                name="name"
                                value={name}
                                autoComplete="off"
                                onChange={handleInputChange}
                                maxLength="40"
                            />
                            <ButtonContainer>

                                <Buttom
                                    onClick={handleShowInput}
                                    padding="true"
                                    content="Go back"
                                    type="button"
                                    background={colors.burgundy}

                                />

                                <Buttom
                                    onClick={handleCategoryCrud}
                                    padding="true"
                                    content="Save"
                                    type="button"

                                />
                            </ButtonContainer>
                        </>

                        : <>
                            <Buttom
                                onClick={handleShowInput}
                                reference={createRef}
                                padding="true"
                                content="Create"
                                type="button"
                                name="create"

                            />
                            <Buttom
                                onClick={handleShowInput}
                                padding="true"
                                content="Delete"
                                type="button"

                                background={colors.burgundy}
                            />
                            <Buttom
                                onClick={handleShowInput}
                                reference={updateRef}
                                padding="true"
                                name="update"
                                content="Update"
                                type="button"
                            />

                        </>

                }





            </Form>
        </Div>
    )
}