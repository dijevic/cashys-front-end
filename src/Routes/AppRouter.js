// thirt party importations

import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,


} from 'react-router-dom'
import { NavBar } from '../components/ui/navbar/NavBar'
import { Footer } from '../pages/Footer'
import { NotFound } from '../pages/NotFound'
import { AuthRouter } from './AuthRouter'
import { ContentRouter } from './ContentRouter'


// own imports
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {

    const isAuth = true


    return (

        <Router>

            <div>
                <NavBar />
                <Routes>

                    <Route
                        element={
                            <PublicRoute
                                isAuth={isAuth}
                                children={AuthRouter} />}
                        path="/*" />

                    <Route
                        element={
                            <PrivateRoute
                                isAuth={isAuth}
                                children={ContentRouter} />}
                        path="/app/*" />




                    <Route path="*" element={<NotFound />} />




                </Routes>

                <Footer />
            </div>
        </Router>

    )
}


