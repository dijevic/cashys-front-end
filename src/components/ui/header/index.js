import React, { useState } from 'react'

// styled components
import { theme } from '../../../styles/theme'
import { Link } from '../../coomon/buttom/Link'
import { CloseMenuIcon } from '../../coomon/icons/CloseMenuIcon'
import { MenuIcon } from '../../coomon/icons/MenuIcon'
import { BrandLogo } from '../../coomon/logo'
import { NavBar } from '../navbar/NavBar'
import { StyledHeader } from './styles'

const { buttonTypes } = theme

export const Header = () => {

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
            <span onClick={handleOpenMenu}>


                {

                    (openMenu) ? <CloseMenuIcon /> : <MenuIcon />
                }

            </span>
            <NavBar open={openMenu} />
        </StyledHeader>
    )
}
