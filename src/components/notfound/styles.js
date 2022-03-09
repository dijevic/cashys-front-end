import styled from 'styled-components'

import background404 from '../../assets/images/404background.jpg'

export const Div = styled.div`
align-items:center;
background: url(${background404}) ;
background-repeat:no-repeat ;
border-right:4px solid  ;
background-size:cover ;
display:flex;
flex-direction :column; ;
justify-content:center;
min-height:100vh;
padding:20px ;
width:100%;
/* position:relative;
&::after{
    content:'';
    display:block;
    position:absolute;
    top:0 ;
    left:0px;
    width:100% ;
    height:100%;
    background:rgba(0,0,0,0.4)

} */


`

export const P = styled.p`
color:#080705;
font-size:7rem;
font-weight:bold;
line-height:8rem;



`
export const Span = styled.span`
color:#ffffff;
font-size:1.5rem;
font-weight:bold;
line-height:1.7rem;
margin-top:20px;

`

export const Button = styled.button`
background:#362023 ;
border-radius:5px ;
color:#ffffff;
font-size:1rem;
font-family: "Hubballi", cursive;
margin-top:20px;
padding:15px 20px;
transition:0.4s ease all;


@media(min-width: 768px) {
    &:hover{
        opacity:0.8 ;
    }
    
}


`