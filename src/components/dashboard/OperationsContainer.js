import React from 'react'
import { useUserStore } from '../../store/store'
import { FilterOptions } from './FilterOptions'
import { Operation } from './Operation'
import { Div, Ul } from './styles'

export const OperationsContainer = React.memo(() => {
    const operations = useUserStore(state => state.operations)
    return (
        <>
            <FilterOptions />
            <Div maxWidth="600" background shadow={false} direction="column">
                <Ul>
                    {
                        operations.map(({ amount, date, description, operation_Type, uuid: id, category }) =>
                            <Operation
                                amount={amount}
                                date={date}
                                description={description}
                                operation_Type={operation_Type}
                                category={category.name}
                                id={id}
                                key={id}
                            />

                        )
                    }

                </Ul>



            </Div>


        </>
    )
})
