import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"
import { toast } from 'react-toastify';

export const sessionExpiredService = async (setUser) => {





    try {
        const resp = await fetchWithToken('', 'GET', paths.renewToken)
        const data = await resp.json()
        console.log(data.token)
        if (data.ok) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('tokenDateStart', new Date().getTime())

        } else {

            setUser(false)
            localStorage.clear()
            toast.error(data.msg)
        }

    } catch (e) {
        console.log(e)
    }



}