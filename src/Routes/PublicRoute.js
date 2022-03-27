import React from 'react'
import { Navigate } from 'react-router-dom'

export const PublicRoute = ({ isAuth, children: Children }) => {

    return (!isAuth) ? <Children /> : <Navigate to="/app/" />

}


