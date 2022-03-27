import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const deleteCategoryService = async (id, deleteCategory) => {

    toast.info('Deleting operation wait a minute .....')



    try {
        const resp = await fetchWithToken({}, 'DELETE', `${paths.deleteCategory}/${id}`)
        const data = await resp.json()
        if (data.ok) {

            deleteCategory(id)
            toast.info('category deleted successfully')

        } else {
            toast.dismiss()
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }



}