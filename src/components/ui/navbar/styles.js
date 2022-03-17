import styled from 'styled-components'

// styled components
import { theme } from '../../../styles/theme'

const { colors, animations } = theme


export const StyledNav = styled.nav`
position: absolute;
top: 56px;
right: 0;
width: 100%;
background: ${colors.white};
padding: 25px;
transform: translateX( ${({ open }) => (open) ? '0px' : '-100%'});
transition: 0.3s ease all;
@media(min-width:768px){
position: static;
background: none;
padding: 0px;
}

`

export const Ul = styled.ul`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;


@media(min-width:768px){
    flex-direction:row;
    justify-content: flex-end;
    align-items: center;
  
}

`


export const P = styled.p`
font-size: 1.3rem;
line-height: 1.3rem;
border-bottom:2px solid transparent ;
color:${colors.black};
transition:.3s ease all;
@media(min-width:768px){
font-size: 1.5rem;
line-height: 1.5rem;
color: ${colors.white};

}

`
export const Li = styled.li`
padding: 10px 0px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
position: relative;
animation-name: ${({ open }) => open && animations.fadeInLeft};
animation-iteration-count: initial;
animation-duration:1s ;
@media(min-width:768px){
padding: 5px;
margin-left: 20px;
    svg{
            fill: none;
            stroke: ${colors.blue};
            margin-right: 5px;
        }
    &::after{
    content:'';
    display: block;
    position:absolute;
    width:0%;
    height:2px;
    background: ${colors.blue};
    transition: .3s ease-in-out all;
    bottom: 0px;
    left: 0;
    }
    &:hover{
        &::after{
        content: '';
        width: 100%;

    }
   
}
}
   

`



