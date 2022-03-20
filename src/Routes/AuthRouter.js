import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ResetPasswordComponent } from '../components/auth/resetpassword/ResetPassword'
import { EmailValidationToken } from '../pages/EmailValidationToken'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'
import { SignUp } from '../pages/SignUp'

export const AuthRouter = () => {
    return (
        <Routes>

            <Route element={<Login />} path="/" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<ResetPasswordComponent />} path="/resetpassword" />
            <Route element={<EmailValidationToken />} path="/validate/:token" />
            <Route element={<EmailValidationToken />} path="/changepassword/validate/:token" />
            <Route element={<NotFound />} path="*" />


        </Routes>
    )
}
