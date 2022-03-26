import { paths } from "../config/endpoints"
import { fetchWithNotToken } from "../helpers/fetchWithoutToken"
import { toast } from 'react-toastify'


export const emailVerificationService = async (fetchData, setLoading) => {
    setLoading(true)
    toast.info('sending an email')


    try {
        const resp = await fetchWithNotToken(fetchData, 'POST', paths.confirmEmail)
        const data = await resp.json()


        if (data.ok) {
            toast.dismiss()
            toast.info('great an email has been send to your email account')

            setLoading(false)

        } else {
            setLoading(false)
            toast.error(data.msg)

        }


    } catch (e) {
        console.log(e)
    }


}