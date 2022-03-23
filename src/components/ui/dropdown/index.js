import React, { useEffect } from 'react'
import { useUserStore } from '../../../store/store'
import { Label, Select } from './styled'

export const Dropdown = ({ setOptionSelected }) => {
    const categories = useUserStore(state => state.categories)

    useEffect(() => {
        setOptionSelected({ category_id: categories[0].uuid })
    }, [])


    const handleChange = ({ target }) => {
        setOptionSelected({ category_id: target.value })

    }
    return (
        <>
            <Label htmlFor="categories">Choose a category:</Label>
            <Select onClick={handleChange} name="cars" id="categories">
                {
                    categories.map(({ name, uuid: id }) =>
                        <option
                            value={id}
                            onChange={handleChange}
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
