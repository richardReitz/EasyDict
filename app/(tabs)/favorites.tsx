import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { Container, Title } from '@/components/Themed';
import { WordListItem } from '@/components/WordListItem';
import { useFavoriteWords } from '@/hooks/useFavoriteWords';
import { EmptyList } from '@/components/EmptyList';

export default function FavoritesScreen() {
    const { favoriteWords } = useFavoriteWords()

    const emptyComponent = (): JSX.Element => 
        <EmptyList label='Nenhum item marcado como favorito.' />

    return (
        <Container>
            <Title>Favoritos</Title>
            <Text className='text-lg'>Marcadas como favorito</Text>
            <FlatList
                data={favoriteWords}
                className='mt-2'
                renderItem={({ item }) => <WordListItem data={item} />}
                ListEmptyComponent={emptyComponent}
            />
        </Container>
    );
}