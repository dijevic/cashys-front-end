import React from 'react'
import validator from 'validator'

// own files

import { useForm } from '../../../hooks/useForm'
import { Buttom } from '../../coomon/buttom'
import { LinkButtom } from '../../coomon/buttom/LinkButtomStyled'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'


import { Div, DivForm, P, Span } from './styles'

export const LoginStyled = () => {



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
        <>
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
                        <LinkButtom to="/">GO BACK HOME</LinkButtom>
                    </Form>

                    <P color="white" >not a member yet ? <Span>Sign up</Span></P>


                </DivForm>
            </Div>

        </>
    )
}
