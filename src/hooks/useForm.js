import { useState, useRef } from 'react'

export const useForm = (initialState = {}) => {
    const [stateValues, setstateValues] = useState(initialState)


    const resetState = () => {
        setstateValues(initialState)
    }

    const ref = useRef('')

    const handleInputChange = ({ target }) => {
        // handle the numerica type of amount
        // checking if the data from input is a NAN
        if (target.name === 'amount' && isNaN(target.value)) {

            setstateValues({
                ...stateValues,
                [target.name]: ref.current

            })

        } else if (target.name === 'amount') {
            ref.current = target.value
            setstateValues({
                ...stateValues,
                [target.name]: ref.current

            })



        } else {
            setstateValues({
                ...stateValues,
                [target.name]: target.value

            })
        }





    }
    return [stateValues, handleInputChange, resetState]



}