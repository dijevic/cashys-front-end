import { toast } from "react-toastify"
import { paths } from "../config/endpoints"
import { fetchWithToken } from "../helpers/fetchWithToken"

export const getOperationsService = async (setOperations, filters) => {

    const { categoryId, operationType, date } = filters

    let endpoint = ''

    if (operationType && !categoryId && !date) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operationType}`

    }
    if (categoryId && !operationType && !date) {
        endpoint = `${paths.getOperationsFiltered}?category_id=${categoryId}`
    }
    if (date && !operationType && !categoryId) {
        endpoint = `${paths.getOperationsFiltered}?date=${date}`
    }

    if (date && operationType && !categoryId) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operationType}&date=${date}`

    }
    if (date && categoryId && !operationType) {
        endpoint = `${paths.getOperationsFiltered}?category_id=${categoryId}&date=${date}`

    }


    if (operationType && categoryId && !date) {
        endpoint = `${paths.getOperationsFiltered}?category_id=${categoryId}&operation_Type=${operationType}`

    }


    if (operationType && categoryId && date) {
        endpoint = `${paths.getOperationsFiltered}?operation_Type=${operationType}&category_id=${categoryId}&date=${date}`
    }
    if (!operationType && !categoryId && !date) {
        endpoint = paths.getOperationsFiltered

    }


    try {
        const resp = await fetchWithToken({}, 'GET', endpoint)
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