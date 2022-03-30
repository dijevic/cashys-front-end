import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getOperationsService = async (setOperations) => {






    try {
        const resp = await fetchWithToken('', 'GET', paths.getOperations)
        const data = await resp.json()
        if (data.ok) {
            setOperations(data.operations)
        } else {
            setOperations(false)
            toast.error(data.message)

        }

    } catch (e) {
        console.log(e)
    }



}