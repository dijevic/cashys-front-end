import React from 'react'
import { theme } from '../../../styles/theme'
import { DotComponent } from '../dot'
import { P } from './styles'

const { colors, } = theme

export const BrandLogo = ({ spinner }) => {



    return (
        <>
            <DotComponent background={colors.blue} />

            <P>Cashys  <span>!</span></P>
        </>

    )



}


