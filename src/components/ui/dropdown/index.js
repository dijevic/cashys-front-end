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
        setOptionSelected({ category_id: categories[0].uuid, name: categories[0].name })
    }, [])


    const handleChange = ({ target }) => {
        console.log(target.option)

        setOptionSelected({ category_id: target.value, name: target.name })

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
