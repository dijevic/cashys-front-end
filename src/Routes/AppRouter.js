// thirt party importations

import React, { useEffect, useRef, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Container, MainBackground } from '../components/coomon/div'
import { Spinner } from '../components/coomon/spinner'
import { Header } from '../components/ui/header'
import { Footer } from '../pages/Footer'
import { NotFound } from '../pages/NotFound'
import { RenewTokenService } from '../services/renewTokenService'
import { sessionExpiredService } from '../services/sessionExpired'
import { useUserStore } from '../store/store'
import { AuthRouter } from './AuthRouter'
import { ContentRouter } from './ContentRouter'


// own imports
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'



export const AppRouter = () => {

    let token = useRef(false)
    const handleSessionExpired = useRef(false)
    const user = useUserStore(state => state.user)

    const setUser = useUserStore(state => state.setUser)
    const [checking, setChecking] = useState(false)

    token.current = localStorage.getItem('token')

    useEffect(() => {

        if (token.current) {
            RenewTokenService(setUser, setChecking)

        } else {
            setChecking(false)
        }



    }, [setUser])

    useEffect(() => {

        if (token.current || document.location.pathname === '/app/') {
            handleSessionExpired.current = setInterval(() => {
                sessionExpiredService(setUser)

            }, 3600000 * 2);
        }

    }, [user, setUser])






    if (checking) {
        return (<Spinner />)
    }



    return (

        <Router>

            <>
                <Header handleSessionExpired={handleSessionExpired} />
                <MainBackground >
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


