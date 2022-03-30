// thirt party importations
import React, { useState } from 'react'
import validator from 'validator'

// styled components
import { P, Span } from '../styles'
import { theme } from '../../../styles/theme'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { useForm } from '../../../hooks/useForm'
import { Button } from '../../coomon/button'
import { Link } from '../../coomon/button/Link'
import { ShowPasswordComponent } from '../../coomon/showpassword'
import { emailVerificationService } from '../../../services/verifyEmailService'
import { Spinner } from '../../coomon/spinner'
import { toast } from 'react-toastify'


const { colors, buttonTypes } = theme

export const SignUpComponent = () => {


    const [loading, setLoading] = useState(false)

    const initialState = {
        name: '',
        email: '',
        password: '',
        password2: ''

    }


    const [showPassword, setshowPassword] = useState(false)
    const [stateValues, handleInputChange] = useForm(initialState)

    const { name, email, password, password2 } = stateValues

    const handleSubmit = (e) => {
        e.preventDefault()



        if (!validator.isEmail(email)) {
            toast.dismiss()
            return toast.info('The email is required')
        }


        if (validator.isEmpty(password) || validator.isEmpty(password2) || validator.isEmpty(name)) {
            toast.dismiss()
            return toast.info('please fill the empty fields')

        }
        if (!validator.equals(password, password2)) {
            toast.dismiss()
            return toast.info('password has to be equal')

        }
        const data = {
            name,
            email,
            password
        }

        emailVerificationService(data, setLoading)



    }

    if (loading) {
        return (
            <Spinner extrainfo="sending verification Email..." />
        )
    }


    return (

        <>
            <P animate>Create your account for free</P>
            <P
                fontSize="3rem"

                color="white">Sign Up Now <Span fontSize="4rem">!</Span>
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
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={name}
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
                <ShowPasswordComponent callback={setshowPassword} showPassword={showPassword} />


                <Button
                    padding="true"
                    content="Sign Up !"
                />

            </Form>

            <P color={colors.white} >do you has an account ?

                <Link
                    borderbottom="true"
                    padding="true"
                    type={buttonTypes.link}
                    to="/">
                    <Span>Sign In</Span>
                </Link>


            </P>


        </>

    )
}
