import { FlatList, Text } from 'react-native';
import { Container, Title } from '@/components/Themed';
import { useHistoryWord } from '@/hooks/useHistoryWord';
import { WordListItem } from '@/components/WordListItem';

export default function HistoryScreen() {
    const { words: historyWords } = useHistoryWord()
    return (
        <Container>
            <Title>Histórico</Title>
            <Text className='text-lg'>Pesquisas recentes</Text>
            <FlatList
                data={historyWords}
                className='mt-2'
                renderItem={({ item }) => <WordListItem data={item} />}
            />
        </Container>
    );
}
