import create from 'zustand'

export const useUserStore = create(set => ({
    user: false,
    balance: 0,
    categories: [],
    setUser: (userData) => set(() => ({ user: userData })),
    setBalance: (mount) => set(() => ({ balance: mount })),
    setCategories: (categoryArray) => set(() => ({ categories: categoryArray })),

}))
export const useUIStore = create(set => ({
    modalState: false,
    setOpenModal: () => set(state => ({ modalState: !state.modalState })),

}))
export const useOperationStore = create(set => ({
    operationType: false,
    setOperationType: (type) => set(() => ({ operationType: type })),

}))
