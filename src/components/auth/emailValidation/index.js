import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { CreateUserService } from '../../../services/createUser'
import { useUserStore } from '../../../store/store'
import { Spinner } from '../../coomon/spinner'

export const EmailTokenValidationComponent = () => {
    const setUser = useUserStore(state => state.setUser)
    const params = useParams()
    const token = params.token

    useEffect(() => {
        if (token) {
            CreateUserService(setUser, token)

        } else {
            <Navigate to="/" />
        }
    }, [params])

    return (
        <Spinner extrainfo="wait a minute, our server is cheking your info" />

    )
}
