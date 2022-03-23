import { AppRouter } from "./Routes/AppRouter"
import { ThemeProvider } from "styled-components"
import { theme } from './styles/theme'


const CashyApp = () => {

    return (

        <ThemeProvider theme={theme}>
            <AppRouter />
        </ThemeProvider>
    )
}

export default CashyApp