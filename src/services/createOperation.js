import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const createOperationService = async (fetchData, setBalance, addOperation, category) => {


    toast.info('creating the operation...wait a minute')


    try {
        const resp = await fetchWithToken(fetchData, 'POST', paths.createOperation)
        const data = await resp.json()
        if (data.ok) {
            toast.dismiss()
            const balance = data.balance.amount
            const operation = data.operation
            operation.category = { name: category }
            addOperation(operation)
            setBalance(balance)
            toast.info('Great ! the operations has been created successfully')

        } else {
            toast.dismiss()
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }



}