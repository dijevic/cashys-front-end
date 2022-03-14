import styled from 'styled-components'
import { theme } from '../../../styles/theme'


const { colors } = theme

export const Div = styled.div`
background:rgba(0,0,0,0.7);
position:fixed;
top:0;
width:100%;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
z-index:200;

`

export const H2 = styled.h2`
font-size:1.3rem;
margin:20px 0px;
line-height: 1.3rem;
font-style: bold;
border-bottom: 2px solid ${colors.blue};
`

export const Span = styled.span`
position: absolute;
top: -70px;
right:0px;
border-radius: 100%;
padding: 5px;
background: ${colors.white};
transition:0.3s ease-in-out background-color;
border:2px solid ${colors.blue};
@media(min-width:768px){
right: -40px;
:hover{
    background: ${colors.blue};
;


  svg{
stroke:${colors.white}

  }
}
}
`