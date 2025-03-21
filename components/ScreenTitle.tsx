import React from 'react';
import { Text, type TextProps } from 'react-native';

type Props = { title: string } & TextProps

export const ScreenTitle: React.FC<Props> = ({ title, ...rest }): JSX.Element => {
    return (
        <Text
            {...rest}
            className='text-3xl mb-4 font-libre-baskerville-bold'
        >
            {title}
        </Text>
   );
};