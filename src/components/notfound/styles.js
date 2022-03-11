// third party imp
import styled from 'styled-components'

// assets
import { theme } from '../../styles/theme'
const { animations } = theme


export const Container = styled.div`
align-items:center;
background:rgba(0,0,0,0.7);
background-size:cover ;
display:flex;
flex-direction:column; 
justify-content:center;
height:100vh;
padding:10px;


`


export const P = styled.p`
color:#080705;
font-size:7rem;
font-weight:bold;
line-height:8rem;
text-align: center;
transform : ${({ rotate }) => rotate && 'rotate(90deg)'};
animation-name:${animations.fadeInup};
animation-iteration-count: initial;
animation-duration: 0.9s;


`
export const Span = styled.span`
color:#ffffff;
font-size:1.5rem;
font-weight:bold;
line-height:1.7rem;
margin-top:20px;
animation-name:${animations.fadeInLeft};
animation-iteration-count: initial;
animation-duration: 0.9s;

`


