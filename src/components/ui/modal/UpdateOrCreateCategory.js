import React from 'react'
import { theme } from '../../../styles/theme'
import { Button } from '../../coomon/button'
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

                <Button
                    onClick={handleShowInput}
                    padding="true"
                    content="Go back"
                    type="button"
                    background={colors.burgundy}

                />

                <Button
                    padding="true"
                    content="Save"
                    type="submit"

                />
            </ButtonContainer>
        </>
    )
}
