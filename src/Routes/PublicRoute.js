import React from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ isAuth, children: Children, ...rest }) => {

    return (!isAuth) ? <Navigate to="/login" /> : <Children />

}


