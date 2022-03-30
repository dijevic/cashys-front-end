import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const updateOperationService = async (fetchData, id, updateOperation, setBalance, category) => {

    toast.info('Updating wait a minute .....')



    try {
        const resp = await fetchWithToken(fetchData, 'PUT', `${paths.updateOperation}/${id}`)
        const data = await resp.json()
        if (data.ok) {
            toast.dismiss()
            setBalance(data.balance.amount)
            let operationUpdated = data.operation
            operationUpdated.category = { name: category }
            updateOperation(data.operation.uuid, data.operation)
            toast.info('updated successfully')
        } else {
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }



}