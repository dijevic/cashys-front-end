import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'

const { colors } = theme
export const Footer = styled.footer`
width: 100%;
height:50px;
padding:20px 10px;
background:none;
position:absolute;
bottom:0;
`

const sharedStyles = css`
font-size:1rem;
line-height:1rem;
color: ${colors.white};
font-weight: bold;
width: 100%;
text-align: center;
display: inline-flex;
justify-content: center;
align-items: center;

@media(min-width:768px){
font-size:1.3rem;
line-height:1.3rem;

}
`

export const P = styled.p`
${sharedStyles}
`


export const Span = styled.span`
${sharedStyles}
color:${colors.blue};
font-size: 1.1rem;
line-height: 1.1rem;
margin-left: 10px;
display:inline;
cursor:pointer;


`

