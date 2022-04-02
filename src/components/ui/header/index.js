import React, { useState } from 'react'
import { useUserStore } from '../../../store/store'

// styled components
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/button/Link'
import { CloseMenuIcon } from '../../coomon/icons/CloseMenuIcon'
import { MenuIcon } from '../../coomon/icons/MenuIcon'
import { BrandLogo } from '../../coomon/logo'
import { NavBar } from '../navbar/NavBar'
import { StyledHeader, Span } from './styles'

const { buttonTypes } = theme

export const Header = ({ handleSessionExpired }) => {
    const user = useUserStore(state => state.user)
    const [openMenu, setOpenMenu] = useState(false)

    const handleOpenMenu = () => {
        setOpenMenu(!openMenu)


    }
    return (
        <StyledHeader>
            <Link
                type={buttonTypes.link}
                centered="true" to="/">
                <BrandLogo />
            </Link>

            {
                (user) &&
                <>
                    <Span animate={openMenu} onClick={handleOpenMenu}>


                        {

                            (openMenu) ? <CloseMenuIcon /> : <MenuIcon />
                        }

                    </Span>
                    <NavBar open={openMenu} handleSessionExpired={handleSessionExpired} />
                </>
            }

        </StyledHeader>
    )
}
