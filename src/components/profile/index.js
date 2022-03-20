
// third  party imp
import React, { useState } from 'react'
import validator from 'validator'
// components

import { UserProfileIcon } from '../coomon/icons/UserProfileIcon'

// hooks
import { useUserStore } from '../../store/store'


// styled components
import { Input } from '../coomon/input'
import { Buttom } from '../coomon/buttom'
import { Link } from '../coomon/buttom/Link'
import { theme } from '../../styles/theme'
import { H2 } from './styles'
import { Form } from '../coomon/form'
import { ShowPasswordComponent } from '../coomon/showpassword'
import { useForm } from '../../hooks/useForm'
import { updateUserDataService } from '../../services/updateUserData'
import { Spinner } from '../coomon/spinner'



const { colors } = theme

export const ProfileComponent = () => {
    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)

    const initialState = {
        name: '',
        password: ''
    }
    const [formValues, handleInputChange] = useForm(initialState)

    const { name, password } = formValues
    const handleUpdate = async (e) => {
        e.preventDefault()
        if (validator.isEmpty(password) && validator.isEmpty(name)) {
            return alert('error')
        }

        const test = updateUserDataService({ name, password }, setUser, setLoading)
        // console.log(test)



        // setUser(test)
    }

    if (loading) {
        return (<Spinner extrainfo="updating... wait a minute" />)
    }

    return (


        <>
            <UserProfileIcon />
            <H2>Hi Again {user.name} </H2>

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

                <Buttom
                    padding="true"
                    content="save" />

                <Link
                    padding="true"
                    background={colors.burgundy}
                    to="/">Go Back </Link>

            </Form>
        </>


    )

}