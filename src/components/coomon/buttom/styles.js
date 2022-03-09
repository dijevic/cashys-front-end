import styled, { css } from 'styled-components';

export const sharedStyle = css`
background:#7899D4;
border-radius:5px;
color:#fff ;
cursor:pointer;
font-size:${props => props.fontSize || '1rem'};
margin:20px auto ;
max-width:70% ;
padding:${props => (props.padding === 'large') ? '22px' : '12px 15px'};


&:hover{
transition:.5s ease-in-out all ;

    background:#7899D470;

}
@media(min-width:768px){
font-size:${props => props.fontSize || '1.3rem'};
min-width:170px;
}
`

export const StyledButtom = styled.button`
${sharedStyle}

`

