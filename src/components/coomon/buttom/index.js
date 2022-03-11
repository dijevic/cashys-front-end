import React from 'react';
import { StyledButtom } from './styles';

// core Buttom
export const Buttom = ({ content, ...props }) => {

    return <StyledButtom {...props} >{content}</StyledButtom>
}