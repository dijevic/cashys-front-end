import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const { colors, buttonTypes } = theme




const customLinkCss = css`
${({ type }) => (type == buttonTypes.link) && css`
background:none;
border-bottom:2px solid transparent ;
border-radius:0px;

&:hover{
    ${({ type }) => (type == buttonTypes.link) && css`
background:none;
border-bottom:2px solid ${colors.burgundy} ;
border-radius:0px;

`}
}



`}


`



export const sharedStyle = css`
background:${({ background }) => (background) ? background : 'var(--blue)'};
border-radius:5px;

box-shadow: ${({ type }) => (type !== buttonTypes.link) ? `3px 3px 7px ${theme.colors.black}` : 'none'};
color:${({ color }) => (color) ? color : colors.white} ;
cursor:pointer;
font-size:${({ fontSize }) => fontSize || '1rem'};
margin:20px auto ;
max-width:70% ;
padding:${({ padding }) => (padding === 'large') ? '22px' : '12px 15px'};
transition:.5s ease-in-out all ;
text-align:center;



&:hover{
background:${({ background }) => (background) ? colors.lightBurgundy : colors.lightBlue};

}
/* custom link styled  */

${customLinkCss}



@media(min-width:768px){
font-size:${props => props.fontSize || '1.3rem'};
min-width:170px;
}
`

export const StyledButtom = styled.button`
${sharedStyle}

`

