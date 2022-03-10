import styled from 'styled-components';
import backgroundAuth from '../../assets/images/background-auth.png'
import { theme } from '../../styles/theme';
const { colors, animations } = theme





export const Div = styled.div`
width: 100%;
height: 100vh;
background:url( ${({ background }) => background || backgroundAuth}) ;
background-size:cover;

`

export const DivForm = styled.div`
align-items:center;
background-size:cover;
background:rgba(0,0,0,0.7);
display:flex;
flex-direction:column; 
height: 100vh;
justify-content:center ;
padding:10px;
width: 100%;
`

export const P = styled.p`
color:${props => props.color || "rgba(0, 0, 0, 0.7)"};
font-size:${props => props.fontSize || '1.5rem'};
margin-top:12px;
text-align:center ;
@media(min-width:768px){
font-size:${props => props.fontSize || '2rem'};
animation-name: ${({ animate }) => (animate) && animations.fadeInup};
animation-iteration-count: initial;
animation-duration: 0.9s;
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