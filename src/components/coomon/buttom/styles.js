import styled, { css } from 'styled-components';
import { theme } from '../../../styles/theme';

const { colors, buttonTypes } = theme




const customLinkCss = css`
${({ type }) => (type === buttonTypes.link) && css`
align-items:center;
background:none;
border-bottom:2px solid transparent ;
border-radius:0px;
display: inline-flex;
min-width: fit-content;

&:hover{
${({ type }) => (type === buttonTypes.link) && css`
background:none;
border-bottom:2px solid ${colors.burgundy} ;
border-radius:0px;`}
}

@media(min-width:768px){
min-width: fit-content;

}


`}

`







export const sharedStyle = css`
background:${({ background }) => (background) ? background : 'var(--blue)'};
border-radius:5px;
box-shadow: ${({ type }) => (type !== buttonTypes.link) ? `3px 3px 7px ${theme.colors.black}` : 'none'};
color:${({ color }) => (color) ? color : colors.white} ;
cursor:pointer;
font-size:${({ fontSize }) => fontSize || '1.1rem'};
margin:${({ centered }) => (centered) ? '0px' : '20px auto'};
max-width:70% ;
min-width:82px;
padding:${({ padding }) => (padding === 'large') ? '22px' : '12px 15px'};
transition:.5s ease-in-out all ;
text-align:center;
font-family: "Hubballi";




&:hover{
background:${({ background }) => (background) ? colors.lightBurgundy : colors.lightBlue};

}


@media(min-width:768px){
font-size:${props => props.fontSize || '1.3rem'};
min-width:170px;
}

/* custom link styled  */

${customLinkCss}

`

export const StyledButtom = styled.button`
${sharedStyle}

`

