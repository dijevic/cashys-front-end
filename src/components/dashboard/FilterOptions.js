import React from 'react'
import { useUserStore } from '../../store/store'
import { theme } from '../../styles/theme'
import { FilterButton, DivContainer } from './styles'
const { colors } = theme
export const FilterOptions = () => {

    const categories = useUserStore(state => (state.categories))

    const handleCategorySelected = ({ target }) => {

        console.log(target.value)
    }
    const handleOperationTypeSelected = () => {
        console.log('selected type')
    }
    return (
        <DivContainer>
            <FilterButton
                onClick={handleOperationTypeSelected}
                color={colors.white}>
                Income
            </FilterButton>
            <FilterButton
                onClick={handleOperationTypeSelected}
                color={colors.white}
                marginleft="true">
                debt
            </FilterButton>

            {
                categories.map((category) =>
                    <FilterButton
                        onClick={handleCategorySelected}
                        marginleft="true"
                        color={colors.white}
                        value={category.uuid}
                        key={category.uuid}>
                        {category.name}
                    </FilterButton>
                )
            }

        </DivContainer>
    )
}
