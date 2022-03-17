
import React from 'react'

// styled components imp
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/buttom/Link'
import { StyledNav, Ul, Li, P } from './styles'
import { UserIcon } from '../../coomon/icons/User'
import { LogoutIcon } from '../../coomon/icons/LogoutIcon'


const { buttonTypes } = theme
export const NavBar = ({ open }) => {
    console.log(open)

    return (

        <StyledNav open={open}>
            <Ul>
                <Li open={open}>
                    <UserIcon />
                    <Link
                        type={buttonTypes.link}
                        direction="column"
                        centered="true"
                        to="/app/profile">
                        <P>Profile</P>
                    </Link>

                </Li>
                <Li open={open}>
                    <LogoutIcon />
                    <P>log out</P>

                </Li>
            </Ul>








        </StyledNav>

    )
}
