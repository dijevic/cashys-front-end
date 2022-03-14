
// third  party imp
import React from 'react'

// components

import { UserProfileIcon } from '../coomon/icons/UserProfileIcon'

// styled components
import { Input } from '../coomon/input'
import { Buttom } from '../coomon/buttom'
import { Link } from '../coomon/buttom/Link'
import { theme } from '../../styles/theme'
import { H2 } from './styles'
import { Form } from '../coomon/form'



const { colors } = theme

export const ProfileComponent = () => {


    return (


        <>
            <UserProfileIcon />
            <H2>Hi Again Diego </H2>

            <Form >
                <Input type="text" placeholder="name">

                </Input>
                <Input type="password" placeholder="Password">

                </Input>

                <Buttom padding="true" content="save" />

                <Link
                    padding="true"
                    background={colors.burgundy}
                    to="/">Go Back </Link>

            </Form>
        </>


    )

}