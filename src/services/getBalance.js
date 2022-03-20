import { paths } from "../config/methodsFetch"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getBalanceService = async (setLoading, setBalance) => {


    setLoading(true)

    try {

        try {
            const resp = await fetchWithToken('', 'GET', paths.getBalance)
            const data = await resp.json()
            if (data.ok) {
                setLoading(false)
                const balance = data.balance
                setBalance(balance)

            } else {
                setLoading(false)
            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}