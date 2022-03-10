import React from 'react'
import { theme } from '../../../styles/theme'

import { StyledNav, StyledLogo, P } from './styles'
const { colors } = theme
export const NavBar = () => {
    return (

        <StyledNav>
            <StyledLogo color={colors.blue} />
            <StyledLogo color={colors.white} />
            <P>Cashys  <span>!</span></P>

        </StyledNav>

    )
}
