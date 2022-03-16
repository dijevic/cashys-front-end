import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const { colors } = theme

export const P = styled.p`
border-bottom:2px solid transparent;
color:${colors.white};
font-size: 2rem;
font-weight: bold;
line-height: 2rem;
position:relative;
display: flex;

span{
    color:${colors.blue};
    transition:.5s ease-in-out all;
    }
&::after{
    content:'';
    display: block;
    position:absolute;
    width:0%;
    height:2px;
    background: ${colors.blue};
    transition: .3s ease-in-out all;
    bottom: -10px;
}
&:hover{
    span{
        display: inline-block;
        transform:translateY(-10px)
    }

    &::after{
    content:'';
    width:100%;
 
}
   
}
   


`

export const Div = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`