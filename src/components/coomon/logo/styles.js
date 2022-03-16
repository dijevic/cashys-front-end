import styled, { css } from 'styled-components'
import { theme } from '../../../styles/theme'

const { animations, colors } = theme

export const Dot = styled.div`
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

export const P = styled.p`
border-bottom:2px solid transparent;
color:${colors.white};
font-size: 2rem;
font-weight: bold;
line-height: 2rem;
position:relative;

span{
    color:${colors.blue};
    transition:.5s ease-in-out all;
    }
&::after{
    content:'';
    display: block;
    position:absolute;
    width:0%;
    height:2px;
    background: ${colors.blue};
    transition: .3s ease-in-out all;
    bottom: -10px;
}
&:hover{
    span{
        display: inline-block;
        transform:translateY(-10px)
    }

    &::after{
    content:'';
    width:100%;
 
}
   
}
   


`

export const Div = styled.div`
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`