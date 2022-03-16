import React from 'react'
import { BrandLogo } from '../logo'
import { Div, Span } from './styles'

export const Spinner = () => {
    return (
        <Div>

            <BrandLogo spinner="true" />
            <Span>Loading ...</Span>
        </Div>
    )
}
