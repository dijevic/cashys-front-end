import styled from 'styled-components'
import { theme } from '../../../styles/theme'

const { colors } = theme


export const StyledNav = styled.nav`
padding:5px ;
background:${colors.burgundy};
display: flex;
align-items: center;
justify-content:space-between;

@media(min-width:768px){
    svg{
    width:35px;
    height:35px;
    transition:0.3s ease-in-out fill; 

    :hover{
        fill:${colors.blue};
        stroke:${colors.white};
    }

}
}
`

export const StyledLogo = styled.div`
width: 25px;
height: 25px;
border-radius: 100%;
margin-right:10px;
background: ${({ color }) => color};


`
export const P = styled.p`
color:${colors.white};
font-size: 2rem;
line-height: 2rem;
font-weight: bold;

span{
    color:${colors.blue}
}

`