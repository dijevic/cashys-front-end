import React from 'react'
import { modalModes } from '../../../config/modalModes'
import { useUIStore } from '../../../store/store'
import { ModalHandleOperations } from './ModalHandleOperation'
import { ModalOperation } from './modalOperation'
const { handleOperation, operationInfo } = modalModes
export const Modal = () => {
    const modalMode = useUIStore(state => state.modalMode)

    if (modalMode === handleOperation) {
        return <ModalHandleOperations />
    } else if (modalMode === operationInfo) {
        return <ModalOperation />

    }

}