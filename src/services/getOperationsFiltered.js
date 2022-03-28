import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getOperationsService = async (setOperations, operation_Type, category_id) => {
    let endpoint = ''

    if (operation_Type && !category_id) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operation_Type}`

    }
    if (!operation_Type && category_id) {
        endpoint = `${paths.getOperationsFiltered}?category_id=${category_id}`
    }

    if (operation_Type && category_id) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operation_Type}&category_id=${category_id}`
    }

    try {
        const resp = await fetchWithToken({}, 'GET', paths.getOperationsFiltered)
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