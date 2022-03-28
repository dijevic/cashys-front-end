import React, { useEffect } from 'react'
import { modalModes } from '../../../config/modalModes'
import { useUIStore, useUserStore } from '../../../store/store'
import { PlusIcon } from '../../coomon/icons/Plus'
import { Label, Select, Div, Span } from './styled'


export const Dropdown = ({ setOptionSelected }) => {
    const categories = useUserStore(state => state.categories)
    const setModalMode = useUIStore(state => state.setModalMode)
    const modalMode = useUIStore(state => state.modalMode)

    useEffect(() => {
        if (categories.length > 0) {
            setOptionSelected({ category_id: categories[0].uuid, name: categories[0].name })
        }
    }, [setOptionSelected, categories])


    const handleChange = ({ target }) => {
        const completeValueString = target.value
        const parsedValue = completeValueString.split(',')

        setOptionSelected({ category_id: parsedValue[0], name: parsedValue[1] })

    }


    const handleChangeModalMode = () => {
        setModalMode(modalModes.categories)

    }
    return (
        <>
            <Label htmlFor="categories">Choose a category:</Label>
            <Div>
                <Select onChange={handleChange} id="categories">
                    {
                        categories.map(({ name, uuid: id }) =>
                            <option
                                value={[id, name]}

                                key={id}
                                name={name}
                            >
                                {name}
                            </option>
                        )
                    }

                </Select>
                {
                    (modalMode !== modalModes.categories) &&
                    <Span onClick={handleChangeModalMode}>
                        <PlusIcon />
                    </Span>
                }
            </Div>

        </>
    )
}
