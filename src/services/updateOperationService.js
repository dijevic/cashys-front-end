import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const updateOperationService = async (fetchData, id, updateOperation, setBalance) => {

    toast.info('Updating wait a minute .....')

    try {

        try {
            const resp = await fetchWithToken(fetchData, 'PUT', `${paths.updateOperation}/${id}`)
            const data = await resp.json()
            console.log(data.operation)
            if (data.ok) {
                toast.dismiss()
                setBalance(data.balance.amount)
                updateOperation(data.operation.uuid, data.operation)
                toast.info('updated successfully')
            } else {
                toast.error(data.msg)
            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}