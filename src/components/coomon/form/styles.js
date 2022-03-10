import styled from 'styled-components'
import { theme } from '../../../styles/theme';

const { animations } = theme

export const StyledForm = styled.form`
align-items:start ;
display:flex;
flex-direction:column;
height:fit-content ;
justify-content:center;
margin-top:12px;
max-width:400px;
width:100%;
animation-name:${animations.fadeInLeft};
animation-iteration-count: initial;
animation-duration: 0.9s;

`