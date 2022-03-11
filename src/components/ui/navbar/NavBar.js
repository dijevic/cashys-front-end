
import React from 'react'

// styled components imp
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/buttom/Link'
import { StyledNav, StyledLogo, P } from './styles'
import { UserIcon } from '../../coomon/icons/User'


const { colors, buttonTypes } = theme
export const NavBar = () => {
    return (

        <StyledNav>

            <Link
                type={buttonTypes.link}
                centered="true" to="/">
                <StyledLogo color={colors.blue} />
                <StyledLogo color={colors.white} />
                <P>Cashys  <span>!</span></P>
            </Link>

            <Link
                type={buttonTypes.link}
                centered="true"
                to="/app/profile">
                <UserIcon />
            </Link>

        </StyledNav>

    )
}
