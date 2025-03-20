import { WordData } from '@/types/types';
import { create } from 'zustand'

type Store = {
    words: Partial<WordData>[];
    setWords: (user: Partial<WordData>[]) => void;
}

export const useHistoryWordStore = create<Store>((set) => ({
    words: [],
    setWords: (words) => set({ words })
}))
