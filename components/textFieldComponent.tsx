import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";

interface TextFieldProps {
    placeholder?: string;
    value?: string; // Required prop for the current value of the text field
    onChangeText?: (text: string) => void; // Function to handle text changes
}

export default function TextFieldComponent({
    placeholder = "Default placeholder",
    value,
    onChangeText,
}: TextFieldProps) {
    return (
        <TextInput
            style={styles.textFieldStyle}
            placeholder={placeholder}
            value={value} // Bind the value prop to the TextInput
            onChangeText={onChangeText} // Bind the onChangeText prop to handle changes
        />
    );
}

const styles = StyleSheet.create({
    textFieldStyle: {
        height: 48,
        borderRadius: 10,
        backgroundColor: "#E3E6E8",
        paddingLeft: 8,
        marginTop: 12,
        fontFamily: "Manrope-Regular"
    }
});