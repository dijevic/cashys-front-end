import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getBalanceService = async (setBalance) => {


    try {
        const resp = await fetchWithToken('', 'GET', paths.getBalance)
        const data = await resp.json()
        if (data.ok) {
            const balance = data.balance
            setBalance(balance)


        } else {
            toast.error(data.message)

        }

    } catch (e) {
        console.log(e)
    }



}