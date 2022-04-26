import styled from 'styled-components'
import { theme } from '../../styles/theme'
const { colors, animations } = theme

export const H2 = styled.h2`
font-size:2rem;
line-height:2rem;
color:${colors.white};
margin-top:15px;
font-weight:bold;
animation-name:${animations.fadeInDown} ;
animation-iteration-count: initial;
animation-duration: 0.6s;


`
export const H3 = styled.h3`
font-size:1.5rem;
line-height:1.5rem;
color:${colors.white};
margin-top:15px;
font-weight:bold;
animation-name:${animations.fadeInLeft};
animation-iteration-count :initial;
animation-duration :0.6s;


`