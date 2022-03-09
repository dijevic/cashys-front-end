// thirt party importations
import React from 'react'
import validator from 'validator'

// styled components
import { Div, DivForm, P, Span } from '../styles'
import { LinkButtom } from '../../coomon/buttom/LinkButtomStyled'
import { theme } from '../../../styles/theme'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { useForm } from '../../../hooks/useForm'
import { Buttom } from '../../coomon/buttom'

export const SignUpComponent = () => {


    const initialState = {
        name: '',
        email: '',
        password: '',
        password2: ''

    }
    const [stateValues, handleInputChange] = useForm(initialState)

    const { name, email, password, password2 } = stateValues

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
                <P>Create your account for free</P>
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
                        type="text"
                        placeholder="Your Name"
                        name="name"
                        value={name}
                        onChange={handleInputChange}
                        autoComplete="off" />
                    <Input
                        type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                        autoComplete="off" />
                    <Input
                        type="password"
                        placeholder="password"
                        name="password2"
                        value={password2}
                        onChange={handleInputChange}
                        autoComplete="off" />

                    <Buttom content="Sign Up !" />

                    <LinkButtom
                        background={theme.colors.burgundy}
                        to="/">Forgot Your password ?
                    </LinkButtom>
                </Form>

                <P color={theme.colors.white} >not a member yet ? <Span>Sign up</Span></P>


            </DivForm>
        </Div>
    )
}
