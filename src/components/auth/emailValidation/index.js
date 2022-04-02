import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import validator from 'validator'
import { changePasswordByReset } from '../../../services/changePasswordByReset'
import { CreateUserService } from '../../../services/createUser'
import { useUserStore } from '../../../store/store'
import { Spinner } from '../../coomon/spinner'

export const EmailTokenValidationComponent = () => {
    const setUser = useUserStore(state => state.setUser)
    const params = useParams()
    const navigate = useNavigate()

    const token = params.token


    useEffect(() => {
        if (token && validator.isJWT(token)) {
            console.log('eh')

            if (params['*'].startsWith('changepassword')) {
                changePasswordByReset(setUser, token,)
            } else if (params['*'].startsWith('validate')) {

                CreateUserService(setUser, token)
            }

        } else {
            navigate('/')
        }
    }, [params, setUser, token, navigate])


    return (
        <Spinner extrainfo="wait a minute, our server is cheking your info" />

    )
}
