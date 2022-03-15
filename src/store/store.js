import create from 'zustand'

export const useUserStore = create(set => ({
    user: false,
    setUser: (userData) => set(state => ({ user: userData })),
}))
