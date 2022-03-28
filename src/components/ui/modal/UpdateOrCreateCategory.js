import React from 'react'
import { theme } from '../../../styles/theme'
import { Buttom } from '../../coomon/buttom'
import { Input } from '../../coomon/input'
import { ButtonContainer } from './styles'
const { colors } = theme

export const UpdateOrCreateCategory = ({ handleInputChange, handleShowInput, name }) => {
    return (
        <>
            <Input
                modal="true"
                type="text"
                placeholder="Category Name"
                name="name"
                value={name}
                autoComplete="off"
                onChange={handleInputChange}
                maxLength="40"
            />
            <ButtonContainer>

                <Buttom
                    onClick={handleShowInput}
                    padding="true"
                    content="Go back"
                    type="button"
                    background={colors.burgundy}

                />

                <Buttom
                    padding="true"
                    content="Save"
                    type="submit"

                />
            </ButtonContainer>
        </>
    )
}
