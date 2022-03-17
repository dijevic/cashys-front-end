
import React from 'react'

// styled components imp
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/buttom/Link'
import { StyledNav, Div, Span, DivLogout } from './styles'
import { UserIcon } from '../../coomon/icons/User'
import { BrandLogo } from '../../coomon/logo'
import { useUserStore } from '../../../store/store'
import { LogoutIcon } from '../../coomon/icons/LogoutIcon'


const { buttonTypes } = theme
export const NavBar = () => {

    const user = useUserStore(state => state.user)
    return (

        <StyledNav>

            <Link
                type={buttonTypes.link}
                centered="true" to="/">
                <BrandLogo />
            </Link>
            {
                (user) &&
                <>
                    <Div>
                        <Link
                            type={buttonTypes.link}
                            direction="column"
                            centered="true"
                            to="/app/profile">
                            <UserIcon />
                            <Span>Profile</Span>
                        </Link>
                        <DivLogout logout="true">
                            <LogoutIcon />
                            <p>log out</p>
                        </DivLogout>
                    </Div>



                </>

            }


        </StyledNav>

    )
}
