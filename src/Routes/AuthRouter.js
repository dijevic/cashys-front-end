import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../pages/Login'
import { NotFound } from '../pages/NotFound'

export const AuthRouter = () => {
    return (
        <Routes>

            <Route element={<Login />} path="/" />
            <Route element={<NotFound />} path="*" />


        </Routes>
    )
}
