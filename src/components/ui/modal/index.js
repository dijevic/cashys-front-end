import React, { useRef } from 'react'
import { modalModes } from '../../../config/modalModes'
import { useUIStore } from '../../../store/store'
import { ModalCategories } from './ModalCategories'
import { ModalCreateOperations } from './ModalCreateOperation'
import { ModalOperation } from './modalOperation'
import { Div } from './styles'
const { handleOperation, operationInfo, categories } = modalModes
export const Modal = () => {
    const modalMode = useUIStore(state => state.modalMode)
    const setOpenModal = useUIStore(state => state.setOpenModal)

    const refDiv = useRef()
    const handleCloseOutSide = ({ target }) => {
        if (target === refDiv.current) {
            setOpenModal()
        }
    }

    return (

        <Div ref={refDiv} onClick={handleCloseOutSide}>

            {
                (modalMode === handleOperation) ? <ModalCreateOperations /> :
                    (modalMode === operationInfo) ? <ModalOperation /> :
                        (modalMode === categories) && <ModalCategories />
            }
        </Div>
    )


}