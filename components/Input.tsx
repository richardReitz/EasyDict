import Colors from '@/constants/Colors';
import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

type Props = {  } & TextInputProps

export const Input: React.FC<Props> = ({ ...rest }): JSX.Element => {
    return (
        <TextInput
            {...rest}
            placeholderTextColor={Colors.light.textSecondary}
            className="w-full p-3 text-light-text bg-[#E0E0E0] rounded mb-2 font-semibold"
        />
   );
};