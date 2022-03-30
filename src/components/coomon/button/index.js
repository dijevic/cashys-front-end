import React from 'react';
import { StyledButton } from './styles';

// core Buttom
export const Button = ({ content, ...props }) => {
    return <StyledButton ref={props.reference}{...props} >{content}</StyledButton>
}