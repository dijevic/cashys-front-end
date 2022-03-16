import React from 'react'
import { theme } from '../../../styles/theme'
import { Dot, P } from './styles'

const { colors, animations } = theme

export const BrandLogo = ({ spinner }) => {



    return (
        <>
            <Dot animate={(spinner) && animations.moveUpToDown} animatedelay="0s" background={colors.blue} />
            <Dot animate={(spinner) && animations.moveDownToUp} animatedelay=".4s" background={colors.white} />
            <Dot animate={(spinner) && animations.moveUpToDown} animatedelay=".8s" background={colors.purple} />
            <P>Cashys  <span>!</span></P>
        </>

    )



}


