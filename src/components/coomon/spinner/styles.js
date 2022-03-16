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
background: rgba(0,0,0,0.7);
flex-direction: column;
span{
    display: flex;
}

`

export const Span = styled.span`
font-size: 2.5rem;
line-height: 2.5rem;
color: ${colors.white};
font-weight: bold;
margin-top:25px;


`