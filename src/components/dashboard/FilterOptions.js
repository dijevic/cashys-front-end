import React, { useRef } from 'react'
import { getOperationsService } from '../../services/getOperationsFiltered'
import { useCategoriesStore, useOperationStore } from '../../store/store'
import { theme } from '../../styles/theme'
import { FilterButton, DivContainer } from './styles'
const { colors } = theme
export const FilterOptions = () => {


    let operationButtonRef = useRef()
    let categoryButtonRef = useRef()
    let operationType = useRef(false)
    let categoryId = useRef(false)

    const categories = useCategoriesStore(state => (state.categories))
    const setOperations = useOperationStore(state => (state.setOperations))



    const handleCategorySelected = ({ target }) => {

        if (categoryButtonRef.current) {
            categoryButtonRef.current.style.background = ''
            categoryButtonRef.current.style.color = ''

        }
        categoryButtonRef.current = target

        categoryButtonRef.current.style.background = theme.colors.blue
        categoryButtonRef.current.style.color = theme.colors.white

        categoryId.current = target.value

        const filters = { operationType: operationType.current, categoryId: categoryId.current }


        getOperationsService(setOperations, filters, false)



    }
    const handleOperationTypeSelected = async ({ target }) => {
        if (operationButtonRef.current) {
            operationButtonRef.current.style.background = ''
            operationButtonRef.current.style.color = ''


        }
        operationButtonRef.current = target

        operationButtonRef.current.style.background = theme.colors.blue
        operationButtonRef.current.style.color = theme.colors.white

        operationType.current = target.name

        const filters = { operationType: operationType.current, categoryId: categoryId.current }


        getOperationsService(setOperations, filters, false)



    }

    const handleGetAllOperations = () => {
        if (categoryButtonRef.current) {
            categoryButtonRef.current.style.background = ''
            categoryButtonRef.current.style.color = ''
        }
        if (operationButtonRef.current) {
            operationButtonRef.current.style.background = ''
            operationButtonRef.current.style.color = ''
        }

        const filters = { operationType: false, categoryId: false }

        if (operationType.current || categoryId.current) {
            getOperationsService(setOperations, filters, false)

        }



    }
    return (
        <DivContainer>
            <FilterButton
                color={colors.white}
                onClick={handleGetAllOperations}
            >
                All
            </FilterButton>
            <FilterButton
                onClick={handleOperationTypeSelected}
                marginleft="true"
                name='income'
                color={colors.white}>
                Income
            </FilterButton>
            <FilterButton
                onClick={handleOperationTypeSelected}
                color={colors.white}
                marginleft="true"
                name='debt'
            >
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
