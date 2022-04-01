import React from 'react'
import { theme } from '../../../styles/theme'

const { colors } = theme

export const ConfusedIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mood-confuzed" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke={colors.white} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="12" cy="12" r="9" />
            <line x1="9" y1="10" x2="9.01" y2="10" />
            <line x1="15" y1="10" x2="15.01" y2="10" />
            <path d="M9.5 16a10 10 0 0 1 6 -1.5" />
        </svg>
    )
}
