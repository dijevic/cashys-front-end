import React from 'react'
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { B, ButtonContainer, P } from './styles'
const { colors } = theme

export const DeleteCategory = ({ categoryName, handleShowDeleteNotification }) => {
    return (
        <>
            <P>Are you sure you want to DELETE <B>{categoryName.toUpperCase()}</B> category ? </P>
            <ButtonContainer>

                <Buttom
                    onClick={handleShowDeleteNotification}
                    padding="true"
                    content="Go back"
                    type="button"

                />

                <Buttom
                    padding="true"
                    content="DELETE"
                    type="submit"
                    background={colors.burgundy}

                />
            </ButtonContainer>
        </>
    )
}
