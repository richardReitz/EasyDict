import { FlatList, Text } from 'react-native';
import { Container, Title } from '@/components/Themed';
import { WordListItem } from '@/components/WordListItem';

export default function HistoryScreen() {
    return (
        <Container>
            <Title>Histórico</Title>
            <Text className='text-lg'>Pesquisas recentes</Text>
            {/* <FlatList
                data={[1,2,3]}
                className='mt-2'
                renderItem={({}) => <WordListItem />}
            /> */}
        </Container>
    );
}
