import React from 'react';
import { Text, TextProps } from 'react-native';
import { AppColors } from '../constants/colors';

type FontWeightType = 'Regular' | 'Bold' | 'Light' | 'Medium' | 'SemiBold';

interface CustomTextProps extends TextProps {
    fontWeight?: FontWeightType;
    fontSize?: number;
    fontColor?: string;
    children: React.ReactNode;
    paddingTop?: number;
}

export default function CustomText({
    fontWeight = 'Regular',
    fontSize = 14,
    fontColor = AppColors.primaryColor,
    style,
    children,
    ...rest
}: CustomTextProps) {
    const getFontFamily = (weight: FontWeightType) => {
        const fontMap = {
            'Regular': 'Manrope-Regular',
            'Bold': 'Manrope-Bold',
            'Light': 'Manrope-Light',
            'Medium': 'Manrope-Medium',
            'SemiBold': 'Manrope-SemiBold'
        };
        return fontMap[weight];
    };

    return (
        <Text
            style={[
                {
                    fontSize,
                    color: fontColor,
                    fontFamily: getFontFamily(fontWeight)
                },
                style
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
}