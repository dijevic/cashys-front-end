import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const deleteOperationService = async (id, deleteOperation, setBalance, setModalOpen) => {

    toast.info('Delting operation wait a minute .....')



    try {
        const resp = await fetchWithToken({}, 'DELETE', `${paths.deleteOperation}/${id}`)
        const data = await resp.json()
        if (data.ok) {
            toast.dismiss()
            setBalance(data.balance.amount)
            deleteOperation(id)
            toast.info('Operation deleted successfully')
            setModalOpen()
        } else {
            toast.dismiss()
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }



}