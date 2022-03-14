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
flex-direction:${({ direction }) => (direction) && direction};

&:hover{
background:none;
border-bottom:${({ borderBottom }) => (borderBottom) && `2px solid ${colors.burgundy}`} ;
border-radius:0px;
transform: translateY(0px);
}

@media(min-width:768px){
min-width: fit-content;
}

`}

`


export const sharedStyle = css`
background:${({ background }) => (background) ? background : colors.blue};
border-radius:20px;
box-shadow: ${({ type }) => (type !== buttonTypes.link) ? `3px 3px 7px rgba(0,0,0,0.3)` : 'none'};
color:${({ color }) => (color) ? color : colors.white} ;
cursor:pointer;
font-family: "Hubballi";
font-size:${({ fontSize }) => fontSize || '1.1rem'};
margin:${({ centered }) => (centered) ? '0px' : '20px auto'};
max-width:70% ;
min-width:82px;
padding:${({ padding }) => (padding) && '12px 15px'};
text-align:center;
transition:.3s ease-in-out all ;

@media(min-width:768px){
&:hover{
background:${({ background }) => (background) ? colors.lightBurgundy : colors.lightBlue};
transform: translateY(-10px);

}
font-size:${props => props.fontSize || '1.3rem'};
min-width:170px;
}
/* custom link styled  */
${customLinkCss}
`

export const StyledButtom = styled.button`
${sharedStyle}

`

