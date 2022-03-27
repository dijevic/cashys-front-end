import React from 'react'
import { modalModes } from '../../../config/modalModes'
import { useUIStore } from '../../../store/store'
import { ModalCategories } from './ModalCategories'
import { ModalHandleOperations } from './ModalHandleOperation'
import { ModalOperation } from './modalOperation'
const { handleOperation, operationInfo, categories } = modalModes
export const Modal = () => {
    const modalMode = useUIStore(state => state.modalMode)


    switch (modalMode) {
        case handleOperation:
            return <ModalHandleOperations />
        case operationInfo:
            return <ModalOperation />
        case categories:
            return <ModalCategories />
        default:
            return <ModalHandleOperations />
    }



}