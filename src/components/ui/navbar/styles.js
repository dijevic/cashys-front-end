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
display: flex;
align-items: center;
justify-content: center;
@media(min-width:768px){
    svg{
    height:28px;
    width:28px;
}
.icon-tabler-user{
    transition: .3s ease all;
}
a{
    &:hover{
    ${Span}{
        transform: translateY(-4px);
        border-bottom: 2px solid ${colors.blue};
    }
    .icon-tabler-user{
        transition: .3s ease all;
        transform: translateY(-4px);

    }
}
}
}

`

export const DivLogout = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 20px;
cursor: pointer;
background: ${colors.white};
padding: 5px 10px;
border-radius: 10px;
box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.3);
p{
    font-size: 1.3rem;
    line-height: 1.3rem;
    border-bottom:2px solid transparent ;

}

&:hover{

    p{
        border-bottom:2px solid ${colors.purple} ;
    }
}
`

