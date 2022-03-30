import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getOperationsService = async (setOperations, setLoading) => {


    setLoading(true)



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



}