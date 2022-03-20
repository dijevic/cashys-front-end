import { paths } from "../config/methodsFetch"
import { fetchEmailVerification } from "../helpers/fetchEmailVerification"

export const CreateUserService = async (setUser, token) => {


    try {

        try {
            const resp = await fetchEmailVerification('POST', paths.newUser, token)
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

            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}