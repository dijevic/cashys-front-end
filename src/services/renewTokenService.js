import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const RenewTokenService = async (setUser, setLoading) => {


    setLoading(true)



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
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }



}