import React from 'react'
import { useUserStore } from '../../../store/store'
import { Label, Select } from './styled'

export const Dropdown = ({ setOptionSelected }) => {
    const categories = useUserStore(state => state.categories)

    const handleChange = ({ target }) => {
        console.log(target.value)
        setOptionSelected((state) => ({
            ...state,
            value: target.value
        }))

    }
    return (
        <>
            <Label htmlFor="cars">Choose a category:</Label>
            <Select placeholder="category" onChange={handleChange} name="cars" id="cars">
                {
                    categories.map(({ name, uuid: id }) =>
                        <option
                            onChange={handleChange}
                            value={name}
                            key={id}
                        >
                            {name}
                        </option>
                    )
                }

            </Select>
        </>
    )
}
