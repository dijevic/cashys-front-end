import React from 'react'
import { theme } from '../../../styles/theme'
import { StyledDot } from './styles'

const { animations, colors } = theme

export const DotComponent = ({ spinner }) => {
    return (

        <>
            <StyledDot animate={(spinner) && animations.moveUpToDown} animatedelay="0s" background={colors.blue} />
            <StyledDot animate={(spinner) && animations.moveDownToUp} animatedelay=".4s" background={colors.white} />
            <StyledDot animate={(spinner) && animations.moveUpToDown} animatedelay=".6s" background={colors.purple} />
        </>


    )
}
