import styled from 'styled-components'
import { theme } from '../../../styles/theme'
const { colors } = theme

export const Label = styled.label`
font-size: 1.3rem;
line-height:1.3rem;
text-align:center;
font-weight: bold;
padding: 5px;
margin-top:10px;


@media(min-width:768px){
font-size: 1.5rem;
line-height:1.5rem;

}

`

export const Select = styled.select`
width: 80%;
border: 2px solid ${colors.blue};
margin-top: 20px;
padding: 15px 18px;
font-size: 1rem;
color:${colors.black};
border-radius: 5px;

@media(min-width:768px){
font-size: 1.2rem;
line-height:1.2rem;

}

`