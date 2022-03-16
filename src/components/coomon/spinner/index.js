import React from 'react'
import { BrandLogo } from '../logo'
import { Div, Span } from './styles'

export const Spinner = () => {
    return (
        <Div>
            <span>

                <BrandLogo spinner="true" />
            </span>
            <Span>Loading ...</Span>
        </Div>
    )
}
