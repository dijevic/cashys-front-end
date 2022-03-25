import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'

const { colors } = theme

export const StyledInput = styled.input`
background:rgba(0,0,0,0.7);
border-radius: 10px;
cursor:pointer;
color:#fff;
font-size:1rem;
margin-top:12px ;
padding:15px 18px ;
outline: none;
width:100%;
&::placeholder{
    font-size: 1.3rem;
    color:${({ modal }) => (modal) ? 'rgba(0, 0, 0, 0.5)' : colors.white}

}

${({ modal }) => (modal) && css` 
color:${colors.black};
background: none;
border-bottom:2px solid ${colors.blue};
border-radius: 0px;


`}

@media(min-width:768px){
font-size:${props => props.fontSize || '1.3rem'};

}

`