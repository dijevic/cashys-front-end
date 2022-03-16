import React from 'react'

// styled components
import { DotComponent } from '../dot'
import { Div, P } from './styles'
import { theme } from '../../../styles/theme'

const { animations } = theme

export const Spinner = () => {
    return (
        <Div>
            <span>
                <DotComponent spinner="true" />
                <DotComponent spinner="true" />
                <DotComponent spinner="true" />

            </span>
            <P>Loading ...</P>
        </Div>
    )
}
