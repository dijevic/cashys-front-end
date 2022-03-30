import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchEmailVerification } from "../helpers/fetchEmailVerification"

export const CreateUserService = async (setUser, token) => {


    try {
        const resp = await fetchEmailVerification('POST', paths.newUser, token)
        const data = await resp.json()
        if (data.ok) {
            toast.info('Great ! your user has been created successfully')
            localStorage.setItem('token', data.token)
            localStorage.setItem('tokenDateStart', new Date().getTime())
            const user = {
                id: data.id,
                name: data.name
            }
            setUser(user)


        } else {
            toast.error('we really sorry , something goes wrong ')
            setUser(false)

        }

    } catch (e) {
        console.log(e)
    }



}