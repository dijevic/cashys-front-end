import styled from 'styled-components'
import { theme } from '../../styles/theme'


const { colors, animations } = theme
export const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
background: ${({ background }) => (background) ? background : 'rgba(0,0,0,0.8)'};
border-radius: 10px;
width: 40%;
margin-top:20px;
flex-direction: ${({ direction }) => direction || 'row'};
width: 100%;
max-width : ${({ maxWidth }) => (maxWidth) && maxWidth};


`

export const Span = styled.span`
color: ${colors.white};
font-size: 2rem;
line-height: 2rem;
margin-top:40px;


`

export const Ul = styled.ul`
/* background: rgba(0,0,0,0.9); */

width: 100%;

display: flex;
flex-direction: column;
max-height: 500px;
overflow-y: scroll;

`

export const Li = styled.li`
font-size: 1rem;
color:${colors.white};
line-height: 1rem;
margin: 10px ;
border: 1px solid ${colors.white};
padding: 20px 15px;
border-radius: 12px;
background:${colors.lightBlue};

animation-name:${animations.fadeInLeft};
animation-iteration-count: initial;
animation-duration: 0.9s;


@media(min-width:768px){
    font-size: 1.4rem;
line-height: 1.4rem;


}

`
