import React from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Tabs } from 'expo-router';
import Colors from '@/constants/Colors';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}) {
    return <MaterialIcons size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
            tabBarActiveTintColor: Colors.theme.tint,
            headerShown: false,
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    title: 'Lista',
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
                    tabBarIcon: ({ color }) => <TabBarIcon name="star-outline" color={color} />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    headerShown: false,
                    title: 'Configurações',
                    tabBarIcon: ({ color }) => <TabBarIcon name="tune" color={color} />,
                }}
            />
        </Tabs>
    );
}
