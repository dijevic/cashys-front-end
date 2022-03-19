import { paths } from "../config/methodsFetch"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"

export const emailVerificationService = async (fetchData, setLoading) => {
    setLoading(true)
    try {

        try {
            const resp = await fetchWithNotToken(fetchData, 'POST', paths.confirmEmail)
            const data = await resp.json()


            if (data.ok) {
                console.log(data)
                setLoading(false)

            } else {
                setLoading(false)
                console.log(data)

            }


        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }
}