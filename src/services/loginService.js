import { paths } from "../config/methodsFetch"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"
import { useUserStore } from "../store/store"

export const loginService = async (fetchData, setUser) => {

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
                setUser(user)

            } else {
                setUser(false)
                console.log('error')
            }




        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }
}