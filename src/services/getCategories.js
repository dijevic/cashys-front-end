import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getCategoriesService = async (setLoading, setCategories) => {


    setLoading(true)



    try {
        const resp = await fetchWithToken('', 'GET', paths.getCategories)
        const data = await resp.json()
        if (data.ok) {
            setLoading(false)

            setCategories(data.categories)

        } else {
            setLoading(false)
            toast.error(data.message)

        }

    } catch (e) {
        console.log(e)
    }



}