import { paths } from "../config/methodsFetch"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const RenewTokenService = async (setUser, setLoading) => {


    setLoading(true)

    try {

        try {
            const resp = await fetchWithToken('', 'GET', paths.renewToken)
            const data = await resp.json()
            if (data.ok) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('tokenDateStart', new Date().getTime())
                const user = {
                    id: data.id,
                    name: data.name
                }
                setUser(user)
                setLoading(false)

            } else {

                setUser(false)
                setLoading(false)
                localStorage.clear()
            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}