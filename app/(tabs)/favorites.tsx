import React from 'react';
import { FlatList, Text } from 'react-native';
import { Container, Title } from '@/components/Themed';
import { WordListItem } from '@/components/WordListItem';
import { useFavoriteWords } from '@/hooks/useFavoriteWords';

export default function FavoritesScreen() {
    const { favoriteWords } = useFavoriteWords()

    return (
        <Container>
            <Title>Favoritos</Title>
            <Text className='text-lg'>Marcadas como favorito</Text>
            <FlatList
                data={favoriteWords}
                className='mt-2'
                renderItem={({ item }) => <WordListItem data={item} />}
            />
        </Container>
    );
}