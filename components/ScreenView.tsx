import React from 'react';
import { View, type ViewProps } from 'react-native';

type Props = ViewProps

export const ScreenView: React.FC<Props> = ({ ...rest }): JSX.Element => {
    return (
        <View {...rest} className='flex-1 p-6 bg-background' />
   );
};