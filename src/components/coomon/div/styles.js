// thrt party imp
import styled from 'styled-components';

// assets
import backgroundAuth from '../../../assets/images/background-auth.png'

export const StyledDivBackground = styled.div`
width: 100%;
min-height: 100vh;
background:url( ${({ background }) => background || backgroundAuth}) ;
background-size:cover;

`

export const StyledContainer = styled.div`
align-items:center;
background-size:cover;
background:rgba(0,0,0,0.4);
display:flex;
flex-direction:column; 
justify-content:center ;
padding:10px;
width: 100%;
min-height: 100vh;

`