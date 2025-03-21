import React from "react";
import * as SecureStore from 'expo-secure-store';
import { useHistoryWordStore } from "@/store/useHistoryWordStore";
import { useUserStore } from "@/store/useUserStore";
import type { WordData } from "@/types/types";

type Props = {
    addWord: (n: string) => Promise<void>;
    removeWord: (n: string) => Promise<void>;
    getWordHistory: () => Promise<Partial<WordData>[]>;
    words: Partial<WordData>[];
}

export const useHistoryWord = (): Props => {
    const { setWords, words } = useHistoryWordStore((state) => state)
    const { user } = useUserStore((state) => state)
    
    const STORAGE_KEY = `easy-dict-history-${user?.uid}`;

    const addWord = async (newWord: string) => {
        try {
            let array: Partial<WordData>[] = [];

            const existingData = await getWordHistory();
            const dataToUpdate = existingData.filter((i) => i.word !== newWord);
        
            if (dataToUpdate) array = dataToUpdate;
            array.unshift({ word: newWord });
            await SecureStore.setItem(STORAGE_KEY, JSON.stringify(array));

            setWords(array);
        } catch (error) {
            throw error;
        }
    }
        
    const getWordHistory = async (): Promise<Partial<WordData>[]> => {
        try {
            const data = await SecureStore.getItemAsync(STORAGE_KEY);
            return data ? JSON.parse(data) : [];
        } catch (error) {
            console.log('error: ', error);
            return [];
        }
    }
        
    const removeWord = async (word: string) => {
        try {
            const existingData = await getWordHistory();
            
            let array: Partial<WordData>[] = existingData;
            array = array.filter((item) => item.word !== word);
        
            await SecureStore.setItem(STORAGE_KEY, JSON.stringify(array));
            setWords(array);
        } catch (error) {
            throw error;
        }

    }

    React.useEffect(() => {
        (async () => {
            const words = await getWordHistory()
            setWords(words)
        })()
    },[])

    return { addWord, getWordHistory, removeWord, words }
}