import React from 'react'
import { Buttom } from '../../coomon/buttom'
import { Form } from '../../coomon/form'
import { Input } from '../../coomon/input'

import { Div, DivForm, P, Span } from './styles'

export const LoginStyled = () => {
    return (
        <>
            <Div>
                <DivForm>
                    <P>start for free</P>
                    <P fontSize="3rem" color="white">Login Now <Span fontSize="4rem">!</Span></P>

                    <Form>
                        <Input
                            type="text"
                            placeholder="Name" />
                        <Input
                            type="password"
                            placeholder="password" />

                        <Buttom content="Login" />
                    </Form>

                    <P color="white" >not a member yet ? <Span>Sign up</Span></P>


                </DivForm>
            </Div>

        </>
    )
}
