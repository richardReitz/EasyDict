import { create } from 'zustand'

type User = {
    email: string;
}

type Store = {
    user: User | null;
    setUser: (user: User) => void;
}

export const useUserStore = create<Store>((set) => ({
    user: null,
    setUser: (user) => set({ user })
}))
