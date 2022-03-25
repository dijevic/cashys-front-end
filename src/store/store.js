import create from 'zustand'

export const useUserStore = create(set => ({
    user: false,
    balance: 0,
    categories: [],
    operations: [],
    setUser: (userData) => set(() => ({ user: userData })),
    setBalance: (mount) => set(() => ({ balance: mount })),
    setCategories: (categoryArray) => set(() => ({ categories: categoryArray })),
    setOperations: (operationsArray) => set(() => ({ operations: operationsArray })),
    addOperation: (operation) => set((state) => ({ operations: [operation, ...state.operations] })),


}))
export const useUIStore = create(set => ({
    modalState: false,
    modalMode: false,
    setOpenModal: () => set(state => ({ modalState: !state.modalState })),
    setModalMode: (mode) => set(() => ({ modalMode: mode })),

}))
export const useOperationStore = create(set => ({
    operationType: false,
    activeOperation: false,
    setOperationType: (type) => set(() => ({ operationType: type })),
    setActiveOperation: (operation) => set(state => ({ activeOperation: operation }))

}))
