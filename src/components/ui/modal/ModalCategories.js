import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'
import { useForm } from '../../../hooks/useForm';
import { createCategoryService } from '../../../services/createCategory';
import { deleteCategoryService } from '../../../services/deleteCategory';
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

import { Div, Span, H2, ButtonContainer, P, H3, B } from './styles'
const { colors } = theme





export const ModalCategories = () => {

    const setOpenModal = useUIStore(state => state.setOpenModal)
    const addCategory = useUserStore(state => state.addCategory)
    const setBalance = useUserStore(state => state.setBalance)
    const deleteOperation = useUserStore(state => state.deleteOperation)
    const updateCategory = useUserStore(state => state.updateCategory)
    const deleteCategory = useUserStore(state => state.deleteCategory)

    const initialFormState = {
        name: ''
    }
    const initialState = {
        category_id: '',
        name: ''
    }
    const [optionSelected, setOptionSelected] = useState(initialState)

    const [categoryCrudOption, setCategoryCrudOption] = useState(false)
    const [showInput, setShowInput] = useState(false)
    const [showNotification, setShowNotification] = useState(false)




    const [formValues, handleInputChange, reset] = useForm(initialFormState)
    const { name } = formValues
    const { category_id, name: categoryName } = optionSelected

    const createRef = useRef()
    const updateRef = useRef()
    const deleteRef = useRef()
    const refDiv = useRef()


    const handleCloseModal = () => {
        setOpenModal()
    }

    const handleCloseOutSide = ({ target }) => {
        if (target === refDiv.current) {
            setOpenModal()
        }
    }

    const handleShowDeleteNotification = ({ target }) => {
        setShowNotification(!showNotification)
        setCategoryCrudOption(target.name)
    }


    const handleDelete = () => {
        console.log('dshgfhsjh')

    }


    const handleShowInput = ({ target }) => {

        setShowInput(!showInput)

        if (target === createRef.current || target === updateRef.current || target === deleteRef.current) {
            setCategoryCrudOption(target.name)
        }


    }



    const handleSubmit = (e) => {
        e.preventDefault()
        if (validator.isEmpty(name.trim()) && categoryCrudOption !== 'delete') {
            toast.dismiss()
            return toast.error('Try using a name for the category')
        }

        if (categoryCrudOption === 'create') {

            createCategoryService({ name }, addCategory)
            reset()
        } else if (categoryCrudOption === 'update') {
            updateCategoryService({ name }, category_id, updateCategory)
            reset()

        } else if (categoryCrudOption === 'delete') {
            deleteCategoryService(category_id, deleteCategory, setBalance, deleteOperation)
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
                <H3>Choose an action for categories</H3>

                {
                    (categoryCrudOption !== 'create') && <Dropdown setOptionSelected={setOptionSelected} />
                }


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

                        : (showNotification)
                            ? <>
                                <P>Are you sure you want to DELETE <B>{categoryName.toUpperCase()}</B> category ? </P>
                                <ButtonContainer>

                                    <Buttom
                                        onClick={handleShowDeleteNotification}
                                        padding="true"
                                        content="Go back"
                                        type="button"

                                    />

                                    <Buttom
                                        padding="true"
                                        content="DELETE"
                                        type="submit"
                                        background={colors.burgundy}

                                    />
                                </ButtonContainer>

                            </>
                            :

                            <>
                                <Buttom
                                    onClick={handleShowInput}
                                    reference={createRef}
                                    padding="true"
                                    content="Create"
                                    type="button"
                                    name="create"

                                />
                                <Buttom
                                    onClick={handleShowDeleteNotification}
                                    padding="true"
                                    content="Delete"
                                    type="button"
                                    name="delete"
                                    reference={deleteRef}

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