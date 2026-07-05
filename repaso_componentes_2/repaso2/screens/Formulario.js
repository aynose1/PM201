import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, SafeAreaView, TextInput, Pressable } from 'react-native';
import { ListaLibros } from './ListaLibros';

export const Formulario = (prop) => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [agregar, setAgregar] = useState(false);

    return (
        <ImageBackground
            style={styles.container}
            source={require('../assets/bg_1.jpg')}
            resizeMode='cover'
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.formulario}>
                    <Text style={styles.titulo}>Formulario</Text>
                    <Text style={styles.textBody}>Título del libro:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Título'
                        onChangeText={setTitulo}
                    />
                    <Text style={styles.textBody}>Autor</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Autor'
                        onChangeText={setAutor}
                    />
                    <Text style={styles.textBody}>Género:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Género'
                        onChangeText={setGenero}
                    />
                    <Pressable
                        style={styles.boton}
                        onPress={() => {
                            
                        }}
                    >Agregar Libro</Pressable>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    formulario: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '80%',
        height: '80%',
        backgroundColor: '#96b1d7',
        borderWidth: 4,
        borderColor: '#29245f',
        borderRadius: 10,
        padding: 15
    },
    titulo: {
        fontSize: 24,
        fontFamily: 'System',
        color: '#29245f',
        marginTop: 20,
        marginBottom: 20
    },
    textBody:{
        fontSize: 13,
        textAlign: 'justify',
    },
    input: {
        borderWidth: 3,
        borderColor: '#29245f',
        borderRadius: 4,
        width: '80%',
        paddingLeft: 7,
        fontSize: 13,
        color: '#3b348a'
    },
    boton: {
        backgroundColor: '#1e214c',
        width: '80%',
        borderRadius: 5,
        textAlign: 'center',
        color: '#8d93f0',
        padding: 5,
        marginTop: 30
    }
});