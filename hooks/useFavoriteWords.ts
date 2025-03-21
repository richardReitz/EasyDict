import React from "react";
import { useFavoriteWordStore } from "@/store/useFavoriteWordStore";
import { addFavoriteWord, getFavoriteWords, removeFavoriteWord } from "@/services/firestoreFavoritesService";
import type { WordData } from "@/types/types";

type Words = Partial<WordData>[]

type Props = {
    favoriteWords: Words;
    addWord: (word: string) => Promise<void>
    removeWord: (word: string) => Promise<void>
}

export const useFavoriteWords = (): Props => {
    const { favoriteWords, setFavoriteWords } = useFavoriteWordStore((state) => state)

    const updateStore = async (words: string[]) => {
        const wordsToUpdate = words.map(( item ) => ({ word: item }))
        setFavoriteWords(wordsToUpdate)
    }

    const syncFavoriteWords = async () => {
        try {
            const words = await getFavoriteWords();
            updateStore(words);
        } catch (error) {
            console.error('Erro ao buscar palavras favoritas:', error);
        }
    };

    const addWord = async (word: string) => {
        try {
            await addFavoriteWord(word);
            setFavoriteWords([ { word }, ...favoriteWords ]);
        } catch (error) {
            console.error('Erro ao adicionar palavra favorita:', error);
        }
    };

    const removeWord = async (word: string) => {
        try {
            await removeFavoriteWord(word);
            setFavoriteWords(favoriteWords.filter((item) => item.word !== word));
        } catch (error) {
            console.error('Erro ao remover palavra favorita:', error);
        }
    }

    React.useEffect(() => {
        syncFavoriteWords()
    },[])

    return { favoriteWords, addWord, removeWord }
}