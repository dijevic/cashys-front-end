import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme';

const { animations, colors } = theme

export const StyledForm = styled.form`
align-items:center ;
background:${({ background }) => (background) && background};
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


${({ modal }) => (modal) && css`
padding: 20px 10px;
border-radius: 30px;
max-width: 450px;
position: relative;
border:2px solid ${colors.blue};
top: 20px;
`
    };

`
