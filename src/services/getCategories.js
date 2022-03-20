import { paths } from "../config/methodsFetch"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getCategoriesService = async (setLoading, setCategories) => {


    setLoading(true)

    try {

        try {
            const resp = await fetchWithToken('', 'GET', paths.getCategories)
            const data = await resp.json()
            if (data.ok) {
                setLoading(false)

                setCategories(data.categories)

            } else {
                setLoading(false)
            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}