import React from "react";
import {pressable, Text, StyleSheet } from "react-native";

export default function Buton({title, onPress}) {
    return (
        <Pressable style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
            
        ]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6847ff',
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
    },
    text: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'b600',
    },
    pressed: {
        opacity: 0.75,
        transform: [{scale: 0.98}],
    },
});

