// thirt party importations

import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Route,
    Routes,



} from 'react-router-dom'
import { Container, MainBackground } from '../components/coomon/div'
import { Spinner } from '../components/coomon/spinner'
import { NavBar } from '../components/ui/navbar/NavBar'
import { Footer } from '../pages/Footer'
import { NotFound } from '../pages/NotFound'
import { RenewTokenService } from '../services/renewTokenService'
import { useUserStore } from '../store/store'
import { AuthRouter } from './AuthRouter'
import { ContentRouter } from './ContentRouter'


// own imports
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {



    const user = useUserStore(state => state.user)
    const setUser = useUserStore(state => state.setUser)
    const [checking, setChecking] = useState(true)
    const token = localStorage.getItem('token')

    useEffect(async () => {
        if (token) {
            RenewTokenService(setUser, setChecking)
        } else {
            setChecking(false)
        }
    }, [token])

    if (checking) {
        return (<Spinner />)
    }

    return (

        <Router>

            <>
                <NavBar />
                <MainBackground>
                    <Container>
                        <Routes>

                            <Route
                                element={
                                    <PublicRoute
                                        isAuth={user}
                                        children={AuthRouter} />}
                                path="/*" />

                            <Route
                                element={
                                    <PrivateRoute
                                        isAuth={user}
                                        children={ContentRouter} />}
                                path="/app/*" />


                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Container>


                </MainBackground>

                <Footer />
            </>
        </Router>

    )
}


