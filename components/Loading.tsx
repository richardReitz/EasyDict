import React from 'react';
import Colors from '@/constants/Colors';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';

type Props = { className?: string } & ActivityIndicatorProps

export const Loading: React.FC<Props> = ({ className, ...rest }): JSX.Element => {
    return <ActivityIndicator {...rest} color={Colors.theme.tint} size={24} className={className} />
};