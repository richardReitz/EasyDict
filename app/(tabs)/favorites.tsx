import { Container, Title } from '@/components/Themed';
import { WordListItem } from '@/components/WordListItem';
import { FlatList, Text } from 'react-native';

export default function FavoritesScreen() {
    return (
        <Container>
            <Title>Favoritos</Title>
            <Text className='text-lg'>Marcadas como favorito</Text>
            {/* <FlatList
                data={[1,2]}
                className='mt-2'
                renderItem={({}) => <WordListItem />}
            /> */}
        </Container>
    );
}