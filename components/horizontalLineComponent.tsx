import React from 'react';
import { DimensionValue, View, ViewStyle } from 'react-native';
import { AppColors } from '../constants/colors';

type HorizontalLineProps = {
    height?: number;
    width?: DimensionValue;
    color?: string;
    marginVertical?: number;
}

export default function HorizontalLine({
    height = 1,
    width = '100%',
    color = AppColors.lightGrayColor,
    marginVertical = 15
}: HorizontalLineProps) {
    const lineStyle: ViewStyle = {
        height,
        width,
        backgroundColor: color,
        marginVertical
    };

    return <View style={lineStyle} />;
}