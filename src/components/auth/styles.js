import styled from 'styled-components';
import { theme } from '../../styles/theme';
const { colors, animations } = theme




export const P = styled.p`
color:${props => props.color || "rgba(0, 0, 0, 0.7)"};
font-size:${props => props.fontSize || '1.5rem'};
margin-top:12px;
text-align:center ;
animation-name: ${({ animate }) => (animate) && animations.fadeInup};
animation-iteration-count: initial;
animation-duration: 0.9s;
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

