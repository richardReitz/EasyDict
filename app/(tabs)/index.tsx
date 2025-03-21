import React, { useRef } from 'react';
import { FlatList } from 'react-native';
import { Container, Title } from '@/components/Themed';
import { SearchInput } from '@/components/SearchInput';
import { WordListItem } from '@/components/WordListItem';
import { api } from '@/services/api';
import { useGetAllWords } from '@/hooks/useGetAllWords';
import { Loading } from '@/components/Loading';
import { EmptyList } from '@/components/EmptyList';
import type { WordData } from "@/types/types";

export default function WordListScreen() {
    const { allWords, loading: loadingAllWords } = useGetAllWords()

    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    
    const [searchQuery, setSearchQuery] = React.useState('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [apiWords, setApiWords] = React.useState<WordData[]>([]);
    const [searched, setSearched] = React.useState<boolean>(false);
    const isApiData = !!apiWords.length

    const fetchWord = async (word: string) => {
        if (!word.trim()) return;
        setLoading(true);
        setApiWords([]);
      
        try {
            const response = await api.get(`/${word}`);
            setApiWords(response.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleClearSearch = (): void => {
        setApiWords([])
        setSearchQuery('')
        setSearched(false)
    };

    const handleFetchWord = (searchText: string) => {
        setSearchQuery(searchText);
    
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
    
        debounceRef.current = setTimeout(() => {
            if (!searchText) return handleClearSearch()

            fetchWord(searchText);
            setSearched(true)
        }, 600); // 600ms
    };

    const emptyComponent = (): JSX.Element => 
        <EmptyList label='Nenhum resultado encontrado.' />

    return (
        <Container>
            <Title>EasyDict</Title>

            <SearchInput
                value={searchQuery}
                onChangeText={handleFetchWord}
                onClearIconPress={handleClearSearch}
            />

            {loading || loadingAllWords ? <Loading className='mt-4' /> :
                <FlatList
                    data={searched || isApiData ? apiWords : allWords}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={emptyComponent}
                    keyExtractor={(key, index) => `${key.word}-${index}`}
                    renderItem={({ item }) => <WordListItem data={item} fromApi={isApiData} />}
                    className='mt-4'
                />
            }
        </Container>
    )
}