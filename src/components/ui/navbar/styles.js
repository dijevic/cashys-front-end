import styled, { animation } from 'styled-components'

// styled components
import { theme } from '../../../styles/theme'

const { colors, animations } = theme


export const StyledNav = styled.nav`
padding:10px  ;
background:${colors.burgundy};
display: flex;
align-items: center;
justify-content:space-between;

@media(min-width:768px){
padding:10px 100px;
}
`





export const Span = styled.span`
border-bottom: 2px solid transparent;
font-size: 1.3rem;
line-height: 1.3rem;
transition: .3s ease all;


`

export const Div = styled.div`
padding:2px 5px;
width:fit-content;
transition:.3s ease-in-out all ;
@media(min-width:768px){
    svg{
    height:28px;
    width:28px;
}
&:hover{
    transform: translateY(-4px);
    ${Span}{
        border-bottom: 2px solid ${colors.blue};
    }
}
}

`

