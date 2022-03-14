import styled from 'styled-components'

// styled components
import { theme } from '../../../styles/theme'

const { colors } = theme


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
export const StyledLogo = styled.div`
background: ${({ color }) => color};
border-radius: 100%;
height: 25px;
margin-right:10px;
width: 25px;
`
export const P = styled.p`
color:${colors.white};
font-size: 2rem;
font-weight: bold;
line-height: 2rem;
    span{
        color:${colors.blue}
    }

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

    svg{
    fill:${colors.white};
    stroke:${colors.white};
    }
}
}

`