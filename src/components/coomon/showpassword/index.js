import React from 'react'

// own imp
import { EyeClosed } from '../icons/EyeClosed'
import { EyeOpen } from '../icons/EyeOpen'

// styled Components
import { Button } from './styles'

export const ShowPasswordComponent = ({ callback, showPassword }) => {



    const handleShow = async () => {
        await callback((state) => !state)

    }

    return (
        <Button onClick={handleShow} >
            {
                (showPassword) ? <EyeClosed /> : <EyeOpen />

            }
            {
                (showPassword) ? 'Hide password' : 'Show Password'
            }

        </Button>
    )
}
