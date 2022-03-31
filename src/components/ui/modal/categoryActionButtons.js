import React from 'react'
import { theme } from '../../../styles/theme'
import { Button } from '../../coomon/button'
const { colors } = theme

export const CategoryActionButtons = ({ handleShowInput, createRef, handleShowDeleteNotification, deleteRef, updateRef }) => {
    return (
        <>

            <Button
                onClick={handleShowInput}
                reference={createRef}
                padding="true"
                content="Create"
                type="button"
                name="create"

            />
            <Button
                onClick={handleShowDeleteNotification}
                padding="true"
                content="Delete"
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
                content="Update"
                type="button"
                background={colors.burgundy}

            />
        </>
    )
}
