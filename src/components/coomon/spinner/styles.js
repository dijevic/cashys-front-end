import styled from 'styled-components'
import { theme } from '../../../styles/theme'
const { colors } = theme
export const Div = styled.div`
display:flex;
justify-content:center;
align-items:center;
background: ${colors.white};
width: 100%;
height:100vh;
position:fixed;
top: 0;
background: rgba(0,0,0,0.4);
span{
    display: flex;

}

`

export const P = styled.p`
font-size: 2rem;
line-height: 2rem;
color: ${colors.white};
font-weight: bold;
margin-top:80px;
font-style: italic;
@media(min-width:768px){
font-size: 2.5rem;
line-height: 2.5rem;
}

`

export const Span = styled.span`
display: flex;
`