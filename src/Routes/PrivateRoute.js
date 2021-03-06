import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({ isAuth, children: Children, ...rest }) => {


    return (isAuth) ? <Children /> : <Navigate to="/" />


}

