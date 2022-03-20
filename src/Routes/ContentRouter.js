import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Profile } from '../pages/Profile'
import { NotFound } from '../pages/NotFound'


export const ContentRouter = React.memo(

    () => {



        return (
            <>

                <Routes>
                    <Route element={<Dashboard />} path="/" />
                    <Route element={<Profile />} path="/profile" />
                    <Route element={<NotFound />} path="*" />


                </Routes>
            </>

        )
    }

)