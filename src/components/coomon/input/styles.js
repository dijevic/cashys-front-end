import styled from 'styled-components'

export const StyledInput = styled.input`
background:rgba(0,0,0,0.7);
border-radius: 10px;
cursor:pointer;
color:#fff;
font-size:1rem;
margin-top:12px ;
padding:15px 18px ;
outline: none;
width:100%;
&::placeholder{
    font-size: 1.3rem;
    color:#fff
}

@media(min-width:768px){
font-size:${props => props.fontSize || '1.3rem'};

}

`