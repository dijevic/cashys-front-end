import React from 'react'

// components

import { TrashIcon } from '../../coomon/icons/TrashIcon'
import { UpdateIcon } from '../../coomon/icons/UpdateIcon'

// styled compoenents
import { theme } from '../../../styles/theme'
import { Button } from '../../coomon/button'
import { AddCategoryIcon } from '../../coomon/icons/AddCategoryIcon'


const { colors } = theme

export const CategoryActionButtons = ({ handleShowInput, createRef, handleShowDeleteNotification, deleteRef, updateRef }) => {
    return (
        <>

            <Button
                onClick={handleShowInput}
                reference={createRef}
                padding="true"
                content={<AddCategoryIcon />}
                type="button"
                name="create"

            />
            <Button
                onClick={handleShowDeleteNotification}
                padding="true"
                content={<TrashIcon />}
                type="button"
                name="delete"
                deletebutton="true"
                reference={deleteRef}
            />
            <Button
                onClick={handleShowInput}
                reference={updateRef}
                padding="true"
                name="update"
                content={<UpdateIcon />}
                type="button"
                background={colors.burgundy}

            />
        </>
    )
}
