import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const deleteCategoryService = async (id, deleteCategory, setBalance, deleteOperation) => {

    toast.info('Deleting operation wait a minute .....')




    const resp = await fetchWithToken({}, 'DELETE', `${paths.deleteCategory}/${id}`)
    const data = await resp.json()
    if (data.ok) {

        deleteCategory(id)
        setBalance(data.balance.amount)

        data.operations.forEach((op) => {

            deleteOperation(op.uuid)
        })

        toast.info('category deleted successfully')

    } else {
        toast.dismiss()
        toast.error(data.msg)
    }





}