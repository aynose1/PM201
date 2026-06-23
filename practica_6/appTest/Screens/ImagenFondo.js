import { View, Text, Button, StyleSheet } from 'react-native';
import React,{useState} from 'react';
import { ImageBackground } from 'react-native';
import {Perfil} from '../components/Perfil';
import { StatusBar } from 'expo-status-bar';

export const ImagenFondo = (style) => {
    
    return (
        <ImageBackground style={styles.container} source={require('../assets/bg_2.jpeg')}>
            <View>
                <Perfil style={styles.perfil} nombre="Diego Almaraz Segovia" carrera="ISC" materia="Química Básica" cuatrimestre="Primero"/>
            </View>
            
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    perfil: {
        backgroundColor: 'gray'
    }
});