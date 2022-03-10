import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ResetPasswordComponent } from '../components/auth/resetpassword/ResetPassword'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { SignUp } from '../pages/SignUp'

export const AuthRouter = () => {
    return (
        <Routes>

            <Route element={<Login />} path="/" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<ResetPasswordComponent />} path="/resetpassword" />
            <Route element={<NotFound />} path="*" />


        </Routes>
    )
}
