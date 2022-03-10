
// thirt party components
import React from 'react'
import validator from 'validator'
import { useForm } from '../../../hooks/useForm'
import { theme } from '../../../styles/theme'


// styled components
import { Buttom } from '../../coomon/buttom'
import { Link } from '../../coomon/buttom/Link'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { Div, DivForm, P, Span } from '../styles'
const { colors, buttonTypes } = theme




export const ResetPasswordComponent = () => {

    const initialState = {
        email: '',
        password: '',
        password2: ''

    }
    const [stateValues, handleInputChange] = useForm(initialState)

    const { email, password, password2 } = stateValues

    const handleSubmit = (e) => {
        e.preventDefault()



        if (!validator.isEmail(email)) {
            return alert('an email is required')
        }
        if (validator.isEmpty(password)) {
            return alert('a password is required')
        }

        if (validator.isEmpty(password) || validator.isEmpty(password2)) {
            return alert('a password is required')

        }
        if (!validator.equals(password, password2)) {
            return alert('password has to be same')

        }



    }
    return (
        <Div>
            <DivForm>
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

                    <Buttom content="Recover password now !" />


                </Form>


                <Link
                    type={buttonTypes.link}
                    color={colors.burgundy}
                    to="/">
                    <Span
                        color={colors.white}

                    >Go back Home</Span>
                </Link>





            </DivForm>
        </Div>
    )
}
