import { paths } from "../config/endpoints"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"
import { toast } from 'react-toastify'

export const loginService = async (fetchData, setUser, setLoading) => {
    setLoading(true)

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
            toast.error(data.msg)

        }




    } catch (e) {
        console.log(e)
    }


}