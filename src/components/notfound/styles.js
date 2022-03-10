import styled from 'styled-components'


import background404 from '../../assets/images/404background.jpg'

export const Div = styled.div`
background: url(${background404})  ;
background-repeat:no-repeat ;
background-size:cover;
min-height:100vh;
width:100%;

`
export const Container = styled.div`
align-items:center;
border-right:4px solid  ;
background:rgba(0,0,0,0.4);
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



`
export const Span = styled.span`
color:#ffffff;
font-size:1.5rem;
font-weight:bold;
line-height:1.7rem;
margin-top:20px;

`


