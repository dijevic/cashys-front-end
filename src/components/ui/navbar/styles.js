import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const { colors } = theme


export const StyledNav = styled.nav`
padding:10px 20px;
background:${colors.burgundy};
display: flex;
align-items: center;
`

export const StyledLogo = styled.div`
width: 25px;
height: 25px;
border-radius: 100%;
margin-right: 25px;
background: ${({ color }) => color};


`
export const P = styled.p`
color:${colors.white};
font-size: 2rem;
line-height: 2rem;
font-weight: bold;

span{
    color:${colors.blue}
}

`