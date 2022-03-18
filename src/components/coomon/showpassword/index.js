import React, { useState } from 'react'

// own imp
import { EyeClosed } from '../icons/EyeClosed'
import { EyeOpen } from '../icons/EyeOpen'

// styled Components
import { Div, Span } from './styles'

export const ShowPasswordComponent = ({ callback, showPassword }) => {



    const handleShow = async () => {
        await callback((state) => !state)

    }

    return (
        <Div onClick={handleShow} >
            {
                (showPassword) ? <Span showPassword={showPassword} > <EyeClosed /> </Span>
                    : <Span showPassword={showPassword}><EyeOpen /></Span>

            }
            {
                (showPassword) ? 'Hide password' : 'Show Password'
            }

        </Div>
    )
}
