import { paths } from "../config/methodsFetch"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"

export const loginService = async (fetchData, setUser, setLoading, toast) => {
    setLoading(true)
    try {

        try {
            const resp = await fetchWithNotToken(fetchData, 'POST', paths.login)
            const data = await resp.json()

            if (data.ok) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('tokenDateStart', new Date().getTime())
                const user = {
                    id: data.id,
                    name: data.name
                }

                setLoading(false)
                setUser(user)

            } else {
                setLoading(false)
                setUser(false)
                toast.error('something wrong with password or Email')

            }




        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }
}