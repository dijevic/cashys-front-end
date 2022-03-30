import React from 'react'
import { theme } from '../../../styles/theme'
import { Button } from '../../coomon/button'
import { B, ButtonContainer, P } from './styles'
const { colors } = theme

export const DeleteCategory = ({ categoryName, handleShowDeleteNotification }) => {
    return (
        <>
            <P>Are you sure you want to DELETE <B>{categoryName.toUpperCase()}</B> category ? </P>
            <ButtonContainer>

                <Button
                    onClick={handleShowDeleteNotification}
                    padding="true"
                    content="Go back"
                    type="button"

                />

                <Button
                    padding="true"
                    content="DELETE"
                    type="submit"
                    background={colors.burgundy}

                />
            </ButtonContainer>
        </>
    )
}
