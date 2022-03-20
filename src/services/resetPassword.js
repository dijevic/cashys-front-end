import { paths } from "../config/methodsFetch"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"

export const resetpasswordService = async (fetchData, setLoading) => {
    setLoading(true)
    try {

        try {
            const resp = await fetchWithNotToken(fetchData, 'PUT', paths.resetPassword)
            const data = await resp.json()

            console.log(data)

            if (data.ok) {
                setLoading(false)


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