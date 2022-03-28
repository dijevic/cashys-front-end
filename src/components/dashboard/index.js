// third  party imp
import React, { useEffect, useState } from 'react'

// hooks
import { useUIStore, useUserStore } from '../../store/store'

// services
import { getOperationsService } from '../../services/getOperations'

import { getCategoriesService } from '../../services/getCategories'

//  components 
import { Modal } from '../ui/modal'
import { Spinner } from '../coomon/spinner'
import { OperationsContainer } from './OperationsContainer'
import { DashboardActionButtons } from './dashboardActionButtons'
import { DashboardHeader } from './dashboardHeader'



export const DashboardComponent = () => {

    const modalState = useUIStore(state => state.modalState)
    const setOperations = useUserStore(state => state.setOperations)
    const setCategories = useUserStore(state => state.setCategories)


    const [loading, setLoading] = useState(false)



    useEffect(() => {


        getOperationsService(setOperations, setLoading)
        getCategoriesService(setLoading, setCategories)

    }, [setOperations, setCategories])





    if (loading) {
        return (
            <Spinner />
        )
    }

    return (

        <>

            {
                (modalState) && <Modal />
            }
            <DashboardHeader />
            <DashboardActionButtons />

            <OperationsContainer />



        </>

    )

}
