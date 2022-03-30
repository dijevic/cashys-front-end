
// thirt party components
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import validator from 'validator'
import { useForm } from '../../../hooks/useForm'
import { resetpasswordService } from '../../../services/resetPassword'
import { theme } from '../../../styles/theme'


// styled components
import { Button } from '../../coomon/button'
import { Link } from '../../coomon/button/Link'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { ShowPasswordComponent } from '../../coomon/showpassword'
import { Spinner } from '../../coomon/spinner'
import { P, Span } from '../styles'
const { colors, buttonTypes } = theme

export const ResetPasswordComponent = () => {



    const initialState = {
        email: '',
        password: '',
        password2: ''

    }

    const [loading, setLoading] = useState(false)
    const [stateValues, handleInputChange] = useForm(initialState)
    const [showPassword, setShowPassword] = useState(false)

    const { email, password, password2 } = stateValues

    const handleSubmit = (e) => {
        e.preventDefault()


        if (!validator.isEmail(email)) {
            toast.dismiss()
            return toast.info('an email is required')
        }


        if (validator.isEmpty(password) || validator.isEmpty(password2)) {
            toast.dismiss()
            return toast.info('a password is required')

        }
        if (!validator.equals(password, password2)) {
            toast.dismiss()

            return toast.error('password has to be same')

        }

        const data = {
            email,
            password,
        }
        resetpasswordService(data, setLoading)
        if (loading) {
            return (
                <Spinner extrainfo="our server is working on it" />
            )
        }

    }
    return (
        <>
            <P animate>Forgot your password ?</P>
            <P
                fontSize="3rem"
                color="white">Reset it now<Span fontSize="4rem">!</Span>
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
                <Input
                    type={(showPassword) ? 'text' : 'password'}
                    placeholder="password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                    autoComplete="off" />

                <ShowPasswordComponent callback={setShowPassword} showPassword={showPassword} />


                <Button
                    padding="true"
                    content="Recover password now !"
                />


            </Form>


            <Link
                borderbottom="true"
                color={colors.burgundy}
                padding="true"
                type={buttonTypes.link}
                to="/">
                <Span
                    color={colors.white}

                >Go back Home</Span>
            </Link>

        </>

    )
}
