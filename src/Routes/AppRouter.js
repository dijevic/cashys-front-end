// thirt party importations

import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Navigate,
    Route,
    Routes,


} from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { AuthRouter } from './AuthRouter'
import { ContentRouter } from './ContentRouter'


// own imports
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {

    const isAuth = false


    return (

        <Router>

            <div>
                <Routes>

                    <Route
                        element={
                            <PrivateRoute
                                isAuth={true}
                                children={ContentRouter} />}
                        path="/*" />


                    <Route
                        element={
                            <PublicRoute
                                isAuth={isAuth}
                                children={AuthRouter} />}
                        path="/auth/*" />

                    <Route path="*" element={<NotFound />} />




                </Routes>
            </div>
        </Router>

    )
}


