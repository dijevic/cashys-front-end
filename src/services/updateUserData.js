import { paths } from "../config/methodsFetch"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const updateUserDataService = async (fetchData, setUser, setLoading) => {


    setLoading(true)

    try {

        try {
            const resp = await fetchWithToken(fetchData, 'PUT', paths.updateUserData)
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

                setUser(false)
                setLoading(false)
            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}