import styled from 'styled-components'
import DatePicker from "react-datepicker";

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
padding: 10px;
@media (min-width: 768px) {
font-size:1.5rem;
line-height: 1.5rem; 
}
`
export const H3 = styled.h3`
font-size:1rem;
margin:25px 0px;
line-height: 1rem;
font-style: bold;
padding: 10px;
@media (min-width: 768px) {
font-size:1.3rem;
line-height: 1.3rem; 
}
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

export const StyledDataPicker = styled(DatePicker)`
width:100%;
border: 2px solid transparent;
border-bottom: 2px solid ${colors.blue};
padding: 15px 18px;
font-size: 1.2rem;
line-height: 1.2rem;

`

export const P = styled.p`
font-size:1.3rem;
margin-top:10px;
line-height: 1.3rem;
font-weight:bold;
color: ${colors.blue};
width: 100%;
padding: 15px 18px;
border-bottom: 2px solid ${colors.blue};
@media(min-width: 768px){
font-size:1.5rem;
margin-top:20px;
line-height: 1.5rem;
}

`

export const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
`
export const B = styled.b`
color: ${colors.black};
font-size: 1.5rem;
`

export const InputTitle = styled.p`
font-size:1.3rem;
line-height:1rem;
color:${colors.black};
text-align:left;
width: 100%;
padding-left: 18px;
font-weight:bold;
font-style: italic;
margin-bottom: -15px;
margin-top:10px;
`

export const SpanCaracters = styled.span`
display: block;
text-align:right;
width: 100%;
margin-top:10px;
font-size:1rem;
font-weight:bold;
`

