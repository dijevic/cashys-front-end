import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const updateUserDataService = async (fetchData, setUser) => {


    toast.info('updating your profile.. wait a minute')


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

            setUser(user)
            toast.dismiss()
            toast.info('Great ! profile updated')


        } else {
            toast.error('oh no :( something went wrong, try it again later')

            setUser(false)
        }

    } catch (e) {
        console.log(e)
    }



}