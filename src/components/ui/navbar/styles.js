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
background:${colors.blue};
border-radius:10px;
padding:2px 5px;
width:fit-content;
transition:0.3s ease-in-out all ;
@media(min-width:768px){
    svg{
    height:28px;
    transition:0.3s ease-in-out fill; 
    width:28px;
}
&:hover{
padding:2px 10px;
    svg{
    fill:${colors.blue};
    stroke:${colors.white};
    }


}
}

`