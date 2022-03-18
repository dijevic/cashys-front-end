
// third  party imp
import React, { useState } from 'react'

// components

import { UserProfileIcon } from '../coomon/icons/UserProfileIcon'

// hooks
import { useUserStore } from '../../store/store'


// styled components
import { Input } from '../coomon/input'
import { Buttom } from '../coomon/buttom'
import { Link } from '../coomon/buttom/Link'
import { theme } from '../../styles/theme'
import { H2 } from './styles'
import { Form } from '../coomon/form'
import { ShowPasswordComponent } from '../coomon/showpassword'



const { colors } = theme

export const ProfileComponent = () => {
    const user = useUserStore(state => state.user)
    const [showPassword, setShowPassword] = useState(false)

    return (


        <>
            <UserProfileIcon />
            <H2>Hi Again {user.name} </H2>

            <Form >
                <Input type="text" placeholder="name">

                </Input>
                <Input
                    type={(showPassword) ? "text" : "password"}
                    placeholder="Password" />
                <ShowPasswordComponent callback={setShowPassword} showPassword={showPassword} />

                <Buttom padding="true" content="save" />

                <Link
                    padding="true"
                    background={colors.burgundy}
                    to="/">Go Back </Link>

            </Form>
        </>


    )

}