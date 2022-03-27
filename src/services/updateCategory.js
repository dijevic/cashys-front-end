import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const updateCategoryService = async (fetchData, id, updateCategory) => {

    toast.info('Updating wait a minute .....')



    try {
        const resp = await fetchWithToken(fetchData, 'PUT', `${paths.updateCategory}/${id}`)
        const data = await resp.json()
        if (data.ok) {
            toast.dismiss()
            updateCategory(id, data.category)
            toast.info('updated successfully')
        } else {
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }


}