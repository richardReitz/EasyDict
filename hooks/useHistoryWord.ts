import React from "react";
import * as SecureStore from 'expo-secure-store';
import { WordData } from "@/types/types";
import { useHistoryWordStore } from "@/store/useHistoryWordStore";

type Props = {
    addWord: (n: string) => Promise<void>;
    removeWord: (n: string) => Promise<void>;
    getWordHistory: () => Promise<Partial<WordData>[]>;
    words: Partial<WordData>[];
}

export const useHistoryWord = (): Props => {
    const { setWords, words } = useHistoryWordStore((state) => state)
    
    const STORAGE_KEY = 'easy-dict-history';

    const addWord = async (newItem: string) => {
        try {
            let array: Partial<WordData>[] = [];

            const existingData = await getWordHistory();
        
            if (existingData) array = existingData;
            array.push({ word: newItem });
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