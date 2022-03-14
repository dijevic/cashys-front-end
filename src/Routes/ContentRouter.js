import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/NotFound'
import { Modal } from '../components/ui/modal'

export const ContentRouter = () => {
    return (
        <>
            {/* <Modal /> */}
            <Routes>
                <Route element={<Dashboard />} path="/" />
                <Route element={<Profile />} path="/profile" />
                <Route element={<NotFound />} path="*" />


            </Routes>
        </>

    )
}
