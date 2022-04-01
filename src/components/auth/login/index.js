import React, { useState } from 'react'
import validator from 'validator'

// own files and files

import { useForm } from '../../../hooks/useForm'
import { Button } from '../../coomon/button'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { Link } from '../../coomon/button/Link'

// style component
import { P, Span } from '../styles'
import { theme } from '../../../styles/theme'
import { loginService } from '../../../services/loginService'
import { useUserStore } from '../../../store/store'
import { Spinner } from '../../coomon/spinner'
import { ShowPasswordComponent } from '../../coomon/showpassword'
import { LogIn } from '../../coomon/icons/LogIn'
import { InfoIcon } from '../../coomon/icons/InfoIcon'

const { colors, buttonTypes } = theme




export const LoginComponent = () => {

    const setUser = useUserStore(state => state.setUser)
    const [showPassword, setShowPassword] = useState(false)

    const [loading, setLoading] = useState(false)
    const initialState = {
        email: '',
        password: ''

    }
    const [stateValues, handleInputChange] = useForm(initialState)

    const { email, password } = stateValues





    const handleSubmit = async (e) => {
        e.preventDefault()



        if (!validator.isEmail(email)) {
            return alert('an email is required')
        }
        if (validator.isEmpty(password)) {
            return alert('a password is required')
        }




        loginService({ email, password }, setUser, setLoading)


    }

    if (loading) {
        return (

            <Spinner />
        )

    }



    return (
        <>
            <P animate>start for free</P>
            <P
                fontSize="3rem"
                color="white">Login Now <Span fontSize="4rem">!</Span>
            </P>

            <Form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    autoComplete="off" />
                <Input
                    type={(showPassword) ? 'text' : 'password'}
                    placeholder="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    autoComplete="off" />

                <ShowPasswordComponent callback={setShowPassword} showPassword={showPassword} />

                <Button
                    padding="true"
                    content={<LogIn />}
                />

                <Link
                    padding="true"
                    background={colors.burgundy}
                    to="/resetpassword">
                    <InfoIcon />
                </Link>
            </Form>

            <P
                color={colors.white} >
                not a member yet ?
                <Link
                    background="none"
                    borderbottom="true"
                    padding="true"
                    type={buttonTypes.link}
                    to="/signup">
                    <Span>Sign up !</Span>
                </Link>
            </P>
        </>






    )
}
