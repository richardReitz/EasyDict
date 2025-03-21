import { FlatList, Text, View } from 'react-native';
import { useHistoryWord } from '@/hooks/useHistoryWord';
import { WordListItem } from '@/components/WordListItem';
import { EmptyList } from '@/components/EmptyList';
import { ScreenTitle, ScreenView } from '@/components';

export default function HistoryScreen() {
    const { words: historyWords } = useHistoryWord()

    const emptyComponent = (): JSX.Element => 
        <EmptyList label='Nenhuma pesquisa recente.' />

    return (
        <ScreenView>
            <ScreenTitle title='Histórico' />
            <Text className='text-lg'>Pesquisas recentes</Text>
            <FlatList
                data={historyWords}
                className='mt-2'
                renderItem={({ item }) => <WordListItem data={item} />}
                ListEmptyComponent={emptyComponent}
            />
        </ScreenView>
    );
}
