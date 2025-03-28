import React from 'react';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import { Redirect, Tabs } from 'expo-router';
import Colors from '@/constants/Colors';
import { useUserStore } from '@/store/useUserStore';

function TabBarIcon(props: {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    color: string;
}) {
    return <MaterialIcons size={25} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const { user } = useUserStore((state) => state);

    if (!user) return <Redirect href="/sign-in" />;

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.theme.tint,
                headerShown: false,
            }}
        >
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
                name="profile"
                options={{
                    headerShown: false,
                    title: 'Conta',
                    tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
                }}
            />
        </Tabs>
    );
}
