import { Link, Stack } from 'expo-router';

import { Text, View } from '@/components/Themed';

export default function NotFoundScreen() {
    return (
        <>
            <Stack.Screen options={{ title: 'Oops!' }} />
                <View>
                <Text>Essa tela não existe.</Text>

                <Link href="/">
                    <Text>Voltar para a tela inicial.</Text>
                </Link>
            </View>
        </>
    );
}