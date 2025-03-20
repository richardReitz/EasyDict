import React from 'react';
import FontAwesome from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            headerShown: useClientOnlyValue(false, true),
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Word List',
                    tabBarIcon: ({ color }) => <TabBarIcon name="list-alt" color={color} />,
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    headerShown: false,
                    title: 'Histórico',
                    tabBarIcon: ({ color }) => <TabBarIcon name="history" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites"
                options={{
                    headerShown: false,
                    title: 'Favoritos',
                    tabBarIcon: ({ color }) => <TabBarIcon name="star" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    title: 'Configurações',
                    tabBarIcon: ({ color }) => <TabBarIcon name="settings" color={color} />,
                }}
            />
        </Tabs>
    );
}
