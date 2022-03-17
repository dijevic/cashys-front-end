import styled from 'styled-components'
import { theme } from '../../../styles/theme'
const { colors } = theme
export const StyledHeader = styled.header`
width: 100%;
background: ${colors.burgundy};
display:flex;
justify-content: space-between;
padding: 10px;
position:relative;
align-items: center;
@media(min-width:768px){
padding:10px 100px;

span{ display:none}
}
`