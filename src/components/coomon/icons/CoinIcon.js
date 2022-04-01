import React from 'react'
import { theme } from '../../../styles/theme'
const { colors } = theme

export const CoinIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-coin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.black} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <path d="M14.8 9a2 2 0 0 0 -1.8 -1h-2a2 2 0 0 0 0 4h2a2 2 0 0 1 0 4h-2a2 2 0 0 1 -1.8 -1" />
            <path d="M12 6v2m0 8v2" />
        </svg>
    )
}
