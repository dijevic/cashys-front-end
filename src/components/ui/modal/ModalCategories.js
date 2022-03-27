import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'
import { useForm } from '../../../hooks/useForm';
import { createCategoryService } from '../../../services/createCategory';
import { updateCategoryService } from '../../../services/updateCategory';
import { useUIStore, useUserStore } from '../../../store/store';

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
    const addCategory = useUserStore(state => state.addCategory)
    const updateCategory = useUserStore(state => state.updateCategory)

    const initialFormState = {
        name: ''
    }
    const initialState = {
        category_id: ''
    }
    const [optionSelected, setOptionSelected] = useState(initialState)

    const [categoryCrudOption, setCategoryCrudOption] = useState(false)
    const [showInput, setShowInput] = useState(false)




    const [formValues, handleInputChange, reset] = useForm(initialFormState)
    const { name } = formValues
    const { category_id } = optionSelected

    const createRef = useRef()
    const updateRef = useRef()
    const refDiv = useRef()


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


    const handleShowInput = ({ target }) => {
        setShowInput(!showInput)

        if (target === createRef.current || target === updateRef.current) {
            setCategoryCrudOption(target.name)

        }


    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isEmpty(name.trim())) {
            toast.dismiss()
            return toast.error('Try using a name for the category')
        }
        if (categoryCrudOption === 'create') {

            createCategoryService({ name }, addCategory)
        } else if (categoryCrudOption === 'update') {
            updateCategoryService({ name }, category_id, updateCategory)
        }

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
                                    padding="true"
                                    content="Save"
                                    type="submit"

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