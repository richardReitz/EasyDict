import { create } from 'zustand';
import type { WordData } from '@/types/types';

interface Store {
    favoriteWords: Partial<WordData>[];
    setFavoriteWords: (words: Partial<WordData>[]) => void;
}

export const useFavoriteWordStore = create<Store>((set) => ({
    favoriteWords: [],
    setFavoriteWords: (words) => set({ favoriteWords: words }),
}));
