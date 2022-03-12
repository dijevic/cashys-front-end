import React from 'react'

// components

import { UserProfileIcon } from '../coomon/icons/UserProfileIcon'

// styled components
import { MainBackground, Container } from '../coomon/div'
import { Form } from '../coomon/form'
import { Input } from '../coomon/input'
import { Buttom } from '../coomon/buttom'
import { Link } from '../coomon/buttom/Link'
import { theme } from '../../styles/theme'
import { H2 } from './styles'



const { colors } = theme

export const ProfileComponent = () => {


    return <MainBackground>

        <Container>

            <UserProfileIcon />
            <H2>Hi Again Diego </H2>

            <Form>
                <Input type="text" placeholder="name">

                </Input>
                <Input type="password" placeholder="Password">

                </Input>

                <Buttom content="save" />

                <Link
                    background={colors.burgundy}
                    to="/">Go Back </Link>

            </Form>

        </Container>

    </MainBackground>
}