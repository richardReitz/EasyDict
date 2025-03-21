import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
import type { WordData } from '@/types/types';

const api = setupCache(axios.create({
    baseURL: 'https://raw.githubusercontent.com/dwyl/english-words/refs/heads/master',
}));

export const useGetAllWords = () => {
    const [allWords, setAllWords] = React.useState<Partial<WordData>[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
    const fetchWords = async () => {
        try {
            const response = await api.get('/words_dictionary.json', {
                cache: {
                ttl: 1000 * 60 * 60,
                },
            });

            console.log('Cache Status:', response.cached ? 'USANDO CACHE ✅' : 'REQUISITANDO DADOS ⏳');

            setAllWords(
                Object.entries(response.data).map((item) => ({ word: item[0]}) )
            );
        } catch (error) {
            console.error('Erro ao buscar palavras:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchWords();
    }, []);

    return { allWords, loading };
};
