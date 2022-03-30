
import { paths } from "../config/endpoints"
import { fetchEmailVerification } from "../helpers/fetchEmailVerification"

export const changePasswordByReset = async (setUser, token) => {




    try {
        const resp = await fetchEmailVerification('PUT', paths.changePasswordByReset, token)
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
            alert(data.msg)


        }

    } catch (e) {
        console.log(e)
    }



}