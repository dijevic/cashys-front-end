import { toast } from "react-toastify"
import { paths } from "../config/methodsFetch"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getOperationsService = async (setOperations, setLoading) => {


    setLoading(true)

    try {

        try {
            const resp = await fetchWithToken('', 'GET', paths.getOperations)
            const data = await resp.json()

            if (data.ok) {

                setOperations(data.operations)
                setLoading(false)

            } else {

                setOperations(false)
                setLoading(false)
                toast.error(data.message)

            }

        } catch (e) {
            console.log(e)
        }

    } catch (error) {
        console.log(error)
    }

}