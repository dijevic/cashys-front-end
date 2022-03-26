import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getBalanceService = async (setLoading, setBalance) => {

    setLoading(true)

    try {

        try {
            const resp = await fetchWithToken('', 'GET', paths.getBalance)
            const data = await resp.json()
            if (data.ok) {
                const balance = data.balance
                setBalance(balance)
                setLoading(false)

            } else {
                setLoading(false)
                toast.error(data.message)

            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}