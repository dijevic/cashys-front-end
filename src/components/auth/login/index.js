import React from 'react'
import validator from 'validator'

// own files and files

import { useForm } from '../../../hooks/useForm'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { Link } from '../../coomon/buttom/Link'

// style component
import { Div, DivForm, P, Span } from '../styles'
import { theme } from '../../../styles/theme'


const { colors, buttonTypes } = theme


export const LoginComponent = () => {



    const initialState = {
        email: '',
        password: ''

    }
    const [stateValues, handleInputChange] = useForm(initialState)

    const { email, password } = stateValues

    const handleSubmit = (e) => {
        e.preventDefault()



        if (!validator.isEmail(email)) {
            return alert('an email is required')
        }
        if (validator.isEmpty(password)) {
            return alert('a password is required')
        }


    }




    return (
        <Div>
            <DivForm>
                <P>start for free</P>
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
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        autoComplete="off" />

                    <Buttom content="Login" />

                    <Link
                        background={colors.burgundy}
                        to="/">Forgot Your password ?
                    </Link>
                </Form>

                <P
                    color={colors.white} >
                    not a member yet ?
                    <Link
                        background="none"
                        type={buttonTypes.link}
                        to="/signup">
                        <Span>Sign up !</Span>
                    </Link>
                </P>



            </DivForm>
        </Div>


    )
}
