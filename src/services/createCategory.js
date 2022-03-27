import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const createCategoryService = async (fetchData, addCategory) => {

    toast.info('Creating the category...wait a minute...')
    try {
        const resp = await fetchWithToken(fetchData, 'POST', paths.createCategory)
        const data = await resp.json()
        console.log(data)
        if (data.ok) {
            toast.dismiss()
            toast.info('great a new category has been added !')
            addCategory(data.category)

        } else {
            toast.dismiss()
            toast.error(data.msg)
        }


    } catch (e) {
        console.log(e)
    }


}