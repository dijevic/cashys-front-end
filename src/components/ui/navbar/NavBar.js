
import React from 'react'

// styled components imp
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/buttom/Link'
import { StyledNav, StyledLogo, P, Div, Span } from './styles'
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
                <StyledLogo color={colors.purple} />
                <P>Cashys  <span>!</span></P>
            </Link>

            <Div>
                <Link
                    type={buttonTypes.link}
                    direction="column"
                    centered="true"
                    to="/app/profile">
                    <UserIcon />
                    <Span>Profile</Span>
                </Link>
            </Div>

        </StyledNav>

    )
}
