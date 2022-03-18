import styled from 'styled-components'
import { theme } from '../../../styles/theme'


const { colors, animations } = theme
export const Div = styled.div`
display:flex;
align-items:center;
font-size: 1.2rem;
line-height: 1.2rem;
color: ${colors.white};
cursor: pointer;
animation-name: ${animations.fadeInup};
animation-iteration-count: initial;
animation-duration: 0.9s;

`

export const Span = styled.span`
animation-name: ${({ showPassword }) => (showPassword) ? animations.fadeInup : animations.fadeInDown};
animation-iteration-count: initial;
animation-duration: 0.9s;

`