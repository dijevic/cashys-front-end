import React from 'react'

import { StyledDivBackground, StyledContainer } from './styles'

export const MainBackground = ({ children }) => {
    return <StyledDivBackground >{children}</StyledDivBackground>
}


export const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>


} 