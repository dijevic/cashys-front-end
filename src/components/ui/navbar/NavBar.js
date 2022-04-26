
import React from 'react'

// styled components imp
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/button/Link'
import { StyledNav, Ul, Li, P } from './styles'
import { UserIcon } from '../../coomon/icons/User'
import { LogoutIcon } from '../../coomon/icons/LogoutIcon'
import { useUserStore } from '../../../store/store'


const { buttonTypes } = theme
export const NavBar = ({ open, handleSessionExpired }) => {
    const setUser = useUserStore(state => state.setUser)


    const handleLogOut = () => {
        clearInterval(handleSessionExpired.current)
        setUser(false)
        localStorage.clear()
    }

    return (

        <StyledNav open={open}>
            <Ul>
                <Li open={open}>
                    <UserIcon />
                    <Link
                        type={buttonTypes.link}
                        direction="column"
                        centered="true"
                        to="/app/profile">
                        <P>Profile</P>
                    </Link>

                </Li>
                <Li open={open} onClick={handleLogOut}>
                    <LogoutIcon />
                    <P>log out</P>

                </Li>
            </Ul>








        </StyledNav>

    )
}
