// third  party imp
import React, { useEffect, useRef } from 'react'

// hooks
import { useCategoriesStore, useOperationStore, useUIStore } from '../../store/store'

// services
import { getOperationsService } from '../../services/getOperations'

import { getCategoriesService } from '../../services/getCategories'

//  components 
import { Modal } from '../ui/modal'
import { OperationsContainer } from './OperationsContainer'
import { DashboardActionButtons } from './dashboardActionButtons'
import { DashboardHeader } from './dashboardHeader'



export const DashboardComponent = () => {

    const operationTypeRef = useRef()

    const modalState = useUIStore(state => state.modalState)
    const setOperations = useOperationStore(state => state.setOperations)
    const setCategories = useCategoriesStore(state => state.setCategories)

    useEffect(() => {


        getOperationsService(setOperations)
        getCategoriesService(setCategories)

    }, [setOperations, setCategories])


    return (

        <>

            {
                (modalState) && <Modal operationType={operationTypeRef.current} />
            }
            <DashboardHeader />
            <DashboardActionButtons operationType={operationTypeRef} />

            <OperationsContainer />



        </>

    )

}
