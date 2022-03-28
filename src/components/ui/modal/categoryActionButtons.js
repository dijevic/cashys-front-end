import React from 'react'
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
const { colors } = theme

export const CategoryActionButtons = ({ handleShowInput, createRef, handleShowDeleteNotification, deleteRef, updateRef }) => {
    return (
        <>

            <Buttom
                onClick={handleShowInput}
                reference={createRef}
                padding="true"
                content="Create"
                type="button"
                name="create"

            />
            <Buttom
                onClick={handleShowDeleteNotification}
                padding="true"
                content="Delete"
                type="button"
                name="delete"
                reference={deleteRef}

                background={colors.burgundy}
            />
            <Buttom
                onClick={handleShowInput}
                reference={updateRef}
                padding="true"
                name="update"
                content="Update"
                type="button"
            />
        </>
    )
}
