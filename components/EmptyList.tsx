import React from 'react';
import { Text, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialIcons"

type Props = { label: string; }

export const EmptyList: React.FC<Props> = ({ label }): JSX.Element => {
    return (
        <View className='flex-row items-center gap-2 mt-4 self-center'>
            <Icon name="search-off" size={20} />
            <Text className='font-light text-sm'>{label}</Text>
        </View>
   );
};