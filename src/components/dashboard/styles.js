// react imp
import styled from 'styled-components'

// styled Components
import { theme } from '../../styles/theme'


const { colors, animations } = theme
export const Div = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
box-shadow:${({ shadow }) => (shadow) ? '5px 5px 7px rgba(0,0,0,0.8)' : 'none'};
background: ${({ background }) => (background) && background};
border-radius: 10px;
width: 40%;
margin-top:20px;
flex-direction: ${({ direction }) => direction || 'row'};
width: 100%;
max-width : ${({ maxWidth }) => (maxWidth) && maxWidth}px;

@media(min-width:768px){
max-width : ${({ maxWidth }) => (maxWidth) && Number(maxWidth) + 100}px;

}


`

export const Span = styled.span`
color: ${({ color }) => color || colors.white};
font-size: 2rem;
font-weight:bold;
line-height: 2rem;
margin-top:50px;
text-align:center;
@media(min-width:768px){
font-size: 2.5rem;
line-height: 2.5rem;
}


`

export const Ul = styled.ul`
display: flex;
flex-direction: column;
margin-bottom: 100px;
width: 100%;
`

export const Li = styled.li`

align-items:center;
animation-duration: 0.9s;
animation-iteration-count: initial;
animation-name:${animations.fadeInLeft};
background: rgba(0, 0, 0,0.7);
border-radius: 20px;
/* border: 2px solid ${colors.blue}; */
box-shadow:5px 5px 7px rgba(0,0,0,0.3);
color:${colors.white};
cursor:pointer;
display:flex;
font-size: 1rem;
line-height: 1rem;
margin: 10px ;
padding: 20px 15px;
transition: .3s background-color ease-in;

@media(min-width:768px){
font-size: 1.4rem;
line-height: 1.4rem;

&:hover{
background: ${colors.lightBlue};
/* border:2px solid ${colors.white}; */


}


}

`

export const P = styled.p`
display:flex;
flex-direction:column;
font-size:1.3rem;
line-height:1.3rem;
span{
    font-style:italic;
}
`

export const SpanIcon = styled.span`
align-items:center;
background:${colors.blue};
border-radius:100%;
box-shadow:5px 5px 7px rgba(0,0,0,0.3);
display:flex;
height:40px;
margin-right:10px;
padding:5px;
width:40px;

`



