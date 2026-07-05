import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export const Bienvenida = () => {
    return (
        <ImageBackground style={styles.fondo} source={require('../assets/bg_1.jpg')}>
            <View style={styles.container}>
                <Text style={styles.texto}>¡Bienvenido!</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fondo: {
        height: '100%',
        width: '100%'
    },
    texto: {
        fontSize: 30
    }
});