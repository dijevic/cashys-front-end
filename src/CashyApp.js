import { AppRouter } from "./Routes/AppRouter"
import { ThemeProvider } from "styled-components"
import { theme } from './styles/theme'
import { ToastContainer } from 'react-toastify';

const CashyApp = () => {

    return (

        <ThemeProvider theme={theme}>
            <AppRouter />
            <ToastContainer />

        </ThemeProvider>
    )
}

export default CashyApp