import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type Props = { label: string; loading?: boolean } & TouchableOpacityProps

export const Button: React.FC<Props> = ({ label, loading, ...rest }): JSX.Element => {
    return (
        <TouchableOpacity
            {...rest}
            className="bg-dark-primary p-3 rounded-md w-full h-12"
        >
            {!!loading ?
                <ActivityIndicator size={22} color="#fff" />
            :
                <Text className="text-white text-center font-bold">{label}</Text>
            }
        </TouchableOpacity>
   );
};