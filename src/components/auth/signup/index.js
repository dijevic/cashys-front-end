// thirt party importations
import React from 'react'
import validator from 'validator'

// styled components
import { P, Span } from '../styles'
import { theme } from '../../../styles/theme'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'
import { useForm } from '../../../hooks/useForm'
import { Buttom } from '../../coomon/buttom'
import { Link } from '../../coomon/buttom/Link'
import { MainBackground, Container } from '../../coomon/div'

const { colors, buttonTypes } = theme

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

        if (validator.isEmpty(password) || validator.isEmpty(password2) || validator.isEmpty(name)) {
            return alert('a password is required')

        }
        if (!validator.equals(password, password2)) {
            return alert('password has to be same')

        }



    }
    return (
        <MainBackground>
            <Container>
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

                    <Buttom
                        padding="true"
                        content="Sign Up !"
                    />

                </Form>

                <P color={colors.white} >do you has an account ?

                    <Link
                        borderBottom="true"
                        padding="true"
                        type={buttonTypes.link}
                        to="/"><Span>Sign In</Span>
                    </Link>


                </P>


            </Container>
        </MainBackground>
    )
}
