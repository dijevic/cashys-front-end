import styled from 'styled-components';
import backgroundAuth from '../../assets/images/background-auth.png'
import { theme } from '../../styles/theme';
const { colors } = theme


export const Div = styled.div`
width: 100%;
height: 100vh;
background:url( ${props => props.background || backgroundAuth}) ;
background-size:cover;
display:flex;
align-items:center;
justify-content:center ;

`


export const DivForm = styled(Div)`

flex-direction:column; 
background:rgba(0,0,0,0.7);
padding:10px;



`



export const P = styled.p`
color:${props => props.color || "rgba(0, 0, 0, 0.7)"};
font-size:${props => props.fontSize || '1.5rem'};
margin-top:12px;
text-align:center ;
@media(min-width:768px){
font-size:${props => props.fontSize || '2rem'};

}



`

export const Span = styled.span`
color:${props => props.color || colors.blue};
font-size:${props => props.fontSize || '1.5rem'};
font-weight:bold ;
@media(min-width:768px){
font-size:${props => props.fontSize || '1.8rem'};

}


`