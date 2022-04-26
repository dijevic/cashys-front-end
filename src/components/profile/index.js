
// third  party imp
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import validator from 'validator'
// components

import { SaveIcon } from '../coomon/icons/SaveIcon'
import { UserProfileIcon } from '../coomon/icons/UserProfileIcon'
import { ShowPasswordComponent } from '../coomon/showpassword'
import { GoBackIcon } from '../coomon/icons/GoBackIcon'
import { Form } from '../coomon/form'
import { Input } from '../coomon/input'
import { Button } from '../coomon/button'
import { Link } from '../coomon/button/Link'

// hooks
import { useUserStore } from '../../store/store'
import { useForm } from '../../hooks/useForm'

// service
import { updateUserDataService } from '../../services/updateUserData'

// styled components
import { theme } from '../../styles/theme'
import { H2, H3 } from './styles'



const { colors } = theme

export const ProfileComponent = () => {
    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)
    const [showPassword, setShowPassword] = useState(false)

    const initialState = {
        name: '',
        password: ''
    }
    const [formValues, handleInputChange] = useForm(initialState)

    const { name, password } = formValues
    const handleUpdate = async (e) => {
        e.preventDefault()
        if (validator.isEmpty(password.trim()) && validator.isEmpty(name.trim())) {
            return toast.error('try filling the empty fields')
        }

        updateUserDataService({ name, password }, setUser)

    }



    return (


        <>
            <UserProfileIcon />
            <H2>Hi {user.name} </H2>

            <H3>Update your account</H3>

            <Form onSubmit={handleUpdate}>
                <Input
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="name">

                </Input>
                <Input
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    type={(showPassword) ? "text" : "password"}
                    placeholder="Password"
                />
                <ShowPasswordComponent callback={setShowPassword} showPassword={showPassword} />

                <Button
                    padding="true"
                    content={<SaveIcon />}
                />

                <Link
                    padding="true"
                    background={colors.burgundy}
                    to="/">
                    <GoBackIcon />
                </Link>

            </Form>
        </>


    )

}