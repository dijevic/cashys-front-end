// react imp
import React from 'react'
import styled, { css } from 'styled-components'
import DatePicker from "react-datepicker";


// styled Components
import { theme } from '../../styles/theme'


const { colors, animations } = theme
export const Div = React.memo(
    styled.div`
display: flex;
align-items: center;
justify-content: space-around;
box-shadow:${({ shadow }) => (shadow) ? '5px 5px 7px rgba(0,0,0,0.8)' : 'none'};
background: ${({ background }) => (background) && background};
border-radius: 10px;
width: 40%;
margin-top:20px;
flex-direction: ${({ direction }) => direction || 'row'};
flex-wrap: wrap;
width: 100%;
max-width : ${({ maxWidth }) => (maxWidth) && maxWidth}px;

@media(min-width:768px){
max-width : ${({ maxWidth }) => (maxWidth) && Number(maxWidth) + 100}px;

}


`
)

export const Span = React.memo(styled.span`
color: ${({ color }) => color || colors.white};
font-size: 2rem;
font-weight:bold;
line-height: 2rem;
margin-top:50px;
text-align:center;
display: flex;
align-items: center;
animation-duration: 0.9s;
animation-iteration-count: initial;
animation-name:${animations.fadeInup};

@media(min-width:768px){
font-size: 2.5rem;
line-height: 2.5rem;
}





`
)
export const Ul = React.memo(
    styled.ul`
display: flex;
flex-direction: column;
margin-bottom: 100px;
width: 100%;
justify-content: space-between;
`
)

export const Li = React.memo(
    styled.li`
align-items:center;
animation-duration: 0.9s;
animation-iteration-count: initial;
animation-name:${animations.fadeInLeft};
background: rgba(0, 0, 0,0.7);
border-radius: 20px;
box-shadow:5px 5px 7px rgba(0,0,0,0.3);
color:${colors.white};
cursor:pointer;
display:flex;
font-size: 1rem;
line-height: 1rem;
margin: 10px ;
padding: 20px 15px;
transition: .3s background-color ease-in;
justify-content:space-between;
@media(min-width:768px){
font-size: 1.4rem;
line-height: 1.4rem;

    &:hover{
    background:${({ operationtype }) => (operationtype === 'income') ? colors.lightBlue : colors.lightBurgundy};
    
    
    }


}

`
)

export const P = React.memo(
    styled.p`
display:flex;
flex-direction:column;
font-size:${({ fontsize }) => (fontsize) ? fontsize : '1rem'};
line-height:${({ fontsize }) => (fontsize) ? fontsize : '1rem'};
font-weight: bold;
margin-left: ${({ marginleft }) => (marginleft) && '15px'};
color: ${({ color }) => color};
cursor:pointer;
text-overflow: ellipsis;
overflow: hidden;
word-wrap: break-word;
word-break: break-all;
max-width :${({ maxwidth }) => (maxwidth) && '70%'};

@media (min-width: 768px) {
font-size:1.3rem;
line-height:1.3rem;
}



${({ actionbutton }) => (actionbutton) && css`
margin-bottom:20px;
text-align: center;
border-bottom: 2px solid ${colors.blue};
padding:5px;



`}


span{
    font-style:italic;
}
`
)

export const SpanIcon = styled.span`
align-items:center;
background:${({ operationtype }) => (operationtype === 'income') ? colors.blue : colors.burgundy};
border-radius:100%;
box-shadow:5px 5px 7px rgba(0,0,0,0.3);
display:flex;
height:40px;
margin-right:10px;
padding:5px;
width:40px;

`
export const FilterButton = styled.button`
background:rgba(255,255,255,0.5);
padding:5px 8px;
margin-left:${({ marginleft }) => (marginleft) && '10px'};
border-radius:5px;
font-size:1rem;
line-height:1rem;
margin-bottom:6px;
cursor:pointer;
@media(min-width:768px){
    &:hover{
        background:${colors.white};

    }
}
`


export const DivContainer = styled.div`
display: flex;
align-items: center;
justify-content: ${({ justify }) => (justify) && justify};

flex-wrap:${({ wrap }) => (wrap) ? wrap : 'wrap'};


`

export const StyledDataPickerButton = styled(DatePicker)`
background:${({ filterselected }) => (filterselected) ? colors.blue : 'rgba(255,255,255,0.5)'};
color:${({ filterselected }) => (filterselected) ? colors.white : colors.black};
padding:5px 8px;
margin-left:${({ marginleft }) => (marginleft) && '10px'};
border-radius:5px;
font-size:1rem;
line-height:1rem;
margin-bottom:6px;
margin: 0px auto;
text-align: center;
display: flex;
justify-content:center;
cursor:pointer;
@media(min-width:768px){
    &:hover{
     background:${({ filterselected }) => (filterselected) ? colors.lightBlue : colors.white};

    }
}

`

export const NooperationContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:100%;
align-items: center;
margin-top:25px;
animation-duration: 0.9s;
animation-iteration-count: initial;
animation-name:${animations.fadeInLeft};
`



export const NoOpeartionText = styled.p`
font-size:2rem;
line-height:2rem;
color:${colors.white};
animation-duration: 0.9s;
animation-iteration-count: initial;
animation-name:${animations.fadeInDown};

`

export const ActionButtonContainer = styled.div`
display: flex;
justify-content:center;
flex-direction:column;
align-items:center;
animation-duration: 0.9s;
animation-iteration-count: initial;
animation-name:${animations.fadeInDown};
`





