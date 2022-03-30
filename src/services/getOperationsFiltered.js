import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getOperationsService = async (setOperations, filters) => {

    const { categoryId, operationType } = filters

    let endpoint = ''

    if (operationType && !categoryId) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operationType}`

    }
    if (!operationType && categoryId) {
        endpoint = `${paths.getOperationsFiltered}?category_id=${categoryId}`
    }

    if (operationType && categoryId) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operationType}&category_id=${categoryId}`
    }
    if (!operationType && !categoryId) {
        endpoint = paths.getOperationsFiltered

    }


    try {
        const resp = await fetchWithToken({}, 'GET', endpoint)
        const data = await resp.json()
        if (data.ok) {

            setOperations(data.operations)

        } else {

            // setOperations(false)
            toast.error(data.message)

        }

    } catch (e) {
        console.log(e)
    }


}