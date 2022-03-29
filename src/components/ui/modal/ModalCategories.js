import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify';
import validator from 'validator'

// hooks
import { useForm } from '../../../hooks/useForm';
import { useUIStore, useUserStore } from '../../../store/store';
// services
import { createCategoryService } from '../../../services/createCategory';
import { deleteCategoryService } from '../../../services/deleteCategory';
import { updateCategoryService } from '../../../services/updateCategory';

// component
import { Dropdown } from '../dropdown';
import { UpdateOrCreateCategory } from './UpdateOrCreateCategory';
import { CategoryActionButtons } from './categoryActionButtons';
import { DeleteCategory } from './DeleteCategory';
// styled components 
import { theme } from '../../../styles/theme'
import { Form } from '../../coomon/form'
import { Minimize } from '../../coomon/icons/Minimize'
import { Span, H2, H3 } from './styles'
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


    const handleCloseModal = () => {
        setOpenModal()
    }


    const handleShowDeleteNotification = ({ target }) => {
        setShowNotification(!showNotification)
        setCategoryCrudOption(target.name)
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

                (showInput) ?
                    <UpdateOrCreateCategory
                        handleInputChange={handleInputChange}
                        handleShowInput={handleShowInput}
                        name={name}
                    /> :
                    (showNotification) ?
                        <DeleteCategory
                            categoryName={categoryName}
                            handleShowDeleteNotification={handleShowDeleteNotification}
                        /> :
                        <CategoryActionButtons
                            handleShowInput={handleShowInput}
                            createRef={createRef}
                            handleShowDeleteNotification={handleShowDeleteNotification}
                            deleteRef={deleteRef}
                            updateRef={updateRef}
                        />
            }

        </Form>

    )
}