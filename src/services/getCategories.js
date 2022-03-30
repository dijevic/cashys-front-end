import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getCategoriesService = async (setCategories) => {

    try {
        const resp = await fetchWithToken('', 'GET', paths.getCategories)
        const data = await resp.json()
        if (data.ok) {
            setCategories(data.categories)

        } else {

            toast.error(data.message)

        }

    } catch (e) {
        console.log(e)
    }



}