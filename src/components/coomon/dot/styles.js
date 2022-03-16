import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'

const { animations } = theme

export const StyledDot = styled.div`
background: ${({ background }) => background};
border-radius: 100%;
height: 25px;
margin-right:10px;
width: 25px;

${({ animate }) => (animate) && css`

animation-name: ${(animate === animations.moveUpToDown)
            ? animations.moveUpToDown
            : animations.moveDownToUp};
animation-direction:alternate;
animation-iteration-count: infinite;
animation-delay: ${({ animatedelay }) => animatedelay && animatedelay};
animation-duration: .8s;
`}

`