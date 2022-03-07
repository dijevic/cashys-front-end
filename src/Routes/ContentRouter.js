import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { NotFound } from '../pages/NotFound'

export const ContentRouter = () => {
    return (
        <Routes>

            <Route element={<Dashboard />} path="/" />
            <Route element={<NotFound />} path="*" />


        </Routes>
    )
}
