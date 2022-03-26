import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"

export const resetpasswordService = async (fetchData, setLoading) => {
    setLoading(true)
    try {

        try {
            const resp = await fetchWithNotToken(fetchData, 'PUT', paths.resetPassword)
            const data = await resp.json()


            if (data.ok) {
                setLoading(false)
                toast.info('a password has been sent to your email to recover your account :)')


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