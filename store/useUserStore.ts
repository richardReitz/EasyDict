import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { create } from 'zustand'

export type User = FirebaseAuthTypes.User | null

type Store = {
    user: User;
    setUser: (user: User) => void;
}

export const useUserStore = create<Store>((set) => ({
    user: null,
    setUser: (user) => set({ user })
}))
