import styled from 'styled-components'
import { theme } from '../../../styles/theme'


const { colors, animations } = theme
export const Button = styled.button.attrs({ type: 'button' })`
display:flex;
align-items:center;
font-size: 1.2rem;
line-height: 1.2rem;
color: ${colors.white};
cursor: pointer;
animation-name: ${animations.fadeInup};
animation-iteration-count: initial;
animation-duration: 0.9s;
background:none;

`

