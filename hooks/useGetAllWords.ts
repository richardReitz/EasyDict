import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import type { WordData } from '@/types/types';

const api = setupCache(axios.create({
    baseURL: 'https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master',
}));

type Return = {
    visibleWords: Partial<WordData>[];
    loading: boolean;
    loadMore: VoidFunction
}

export const useGetAllWords = (): Return => {
    const [allWords, setAllWords] = useState<Partial<WordData>[]>([]);
    const [visibleWords, setVisibleWords] = useState<Partial<WordData>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const page = useRef<number>(1);
    const WORDS_PAGE = 50;

    useEffect(() => {
        const fetchWords = async (): Promise<void> => {
            try {
                const response = await api.get('/words_dictionary.json');
                console.log('Cache Status:', response.cached ? 'USANDO CACHE ✅' : 'REQUISITANDO DADOS ⏳');

                const wordList = Object.entries(response.data).map(item => ({ word: item[0] }));
                setAllWords(wordList);
                
                setVisibleWords(wordList.slice(0, WORDS_PAGE));
            } catch (error) {
                console.error('Erro ao buscar palavras:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, []);

    const loadMore = (): void => {
        setLoading(true)

        const nextPage = page.current + 1;
        const newWords = allWords.slice(0, nextPage * WORDS_PAGE);

        if (newWords.length > visibleWords.length) {
            setVisibleWords(newWords);
            page.current = nextPage;
        }

        setLoading(false)
    };

    return { visibleWords, loading, loadMore };
};