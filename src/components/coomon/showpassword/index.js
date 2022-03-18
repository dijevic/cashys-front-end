import React, { useState } from 'react'

// own imp
import { EyeClosed } from '../icons/EyeClosed'
import { EyeOpen } from '../icons/EyeOpen'

// styled Components
import { Div } from './styles'

export const ShowPasswordComponent = ({ callback, showPassword }) => {



    const handleShow = async () => {
        await callback((state) => !state)

    }

    return (
        <Div onClick={handleShow} >
            {
                (showPassword) ? <EyeClosed /> : <EyeOpen />

            }
            {
                (showPassword) ? 'Hide password' : 'Show Password'
            }

        </Div>
    )
}
