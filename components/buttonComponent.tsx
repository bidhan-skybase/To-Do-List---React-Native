import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

type ButtonComponentProps = {
    onPress: () => void,
    height?: number,
    title?: string // Optional height prop
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onPress, height = 36, title = "title" }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, { height }]}>
            <View>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "#DCE6FA",
        justifyContent: "center",
        alignItems: 'center',
        paddingHorizontal: 16,
        borderRadius: 10,
    },
    buttonText: {
        color: "#0D4DFE",
        fontSize: 14,
        fontWeight: '600'
    }
});

export default ButtonComponent;