import { TextInput, View, Text, StyleSheet, FlatList, ScrollView, ImageBackground, Pressable, ActivityIndicator, Alert } from 'react-native';
import { Libro } from '../componentes/Libro';
import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

export const ListaLibros = () => {

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [genero, setGenero] = useState('');

    const [loading, setLoading] = useState(false);

    const [agregar, setAgregar] = useState(false);

    const [libro, setLibro] = useState([
        {id: 1, titulo: 'IT', autor: 'Stephen King', genero: 'Terror'},
        {id: 2, titulo: 'Movy Dick', autor: 'Herman Melville', genero: 'Ficción'},
        {id: 3, titulo: 'Movy Dick', autor: 'Herman Melville', genero: 'Ficción'},
        {id: 4, titulo: 'Movy Dick', autor: 'Herman Melville', genero: 'Ficción'},
        {id: 5, titulo: 'Movy Dick', autor: 'Herman Melville', genero: 'Ficción'},
        {id: 6, titulo: 'Movy Dick', autor: 'Herman Melville', genero: 'Ficción'},
    ]);
    const temprizador = useRef(null);

    const Validacion = () => {
            Alert.alert(
                'Entradas Inválidas',
                'Todos los campos deben ser llenados',
                [
                    {
                        text: 'Aceptar',
                        onPress: () => 'Nada'
                    }
                ]
            );
        }

    const Alerta = (libroAgregado) => {
        Alert.alert(
            'Registro exitoso',
            `Título: ${libroAgregado.titulo}\nAutor: ${libroAgregado.autor}\nGénero: ${libroAgregado.genero}`,
            [
                {
                    text: 'Aceptar',
                    onPress: () => 'nada'
                }
            ]
        );
    };

    useEffect(() => {
            return () => clearTimeout(temprizador.current);
        }, []);

    const cargarDatos = () => {
        clearTimeout(temprizador.current);
        setLoading(true)
        temprizador.current = setTimeout(() => {

        const nuevo = {id: libro.length + 1, titulo, autor, genero};
        setLibro((prevLibro) => [...prevLibro, nuevo]);
        setLoading(false);
        Alerta(nuevo);
        setTitulo('');
        setAutor('');
        setGenero('');

    }, 4000);
    }

    return (
        <ImageBackground
        style={styles.fondo}
        source={require('../assets/bg_1.jpg')}
        resizeMode='cover'
        >
            <View style={styles.container}>
                
                    <Text style={[styles.titulo, {color: '#fff'}]}>Registro de Libros</Text>     
                    <Text style={styles.textBody}>Título del libro:</Text>
                    <TextInput
                        value={titulo}
                        style={styles.input}
                        placeholder='Título'
                        onChangeText={setTitulo}
                    />

                    <Text style={styles.textBody}>Autor</Text>
                    <TextInput
                        value={autor}
                        style={styles.input}
                        placeholder='Autor'
                        onChangeText={setAutor}
                    />
                    <Text style={styles.textBody}>Género:</Text>
                    <TextInput
                        value={genero}
                        style={styles.input}
                        placeholder='Género'
                        onChangeText={setGenero}
                    />

                    <Pressable
                        style={styles.boton}
                        onPress={() => {
                            if (titulo === '' || autor === '' || genero === '') {
                                Validacion();
                            } else {
                                cargarDatos();
                            }
                        }} 
                    >
                        {loading ?
                            <ActivityIndicator size='large' color='green' animating={loading}/> :
                            <Text style={styles.textoBoton}>Agregar Libro</Text>
                        }

                    </Pressable>
                    
                    <Text style={styles.titulo}>Lista de Libros</Text>
                    <FlatList
                        style={styles.flatList}
                        data={libro}
                        renderItem={({item}) => (
                            <Libro titulo={item.titulo} autor={item.autor} genero={item.genero}/>
                        )}
                        keyExtractor={(item) => item.id}
                    />
                <StatusBar style='auto'/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    fondo: {
        display: 'flex',
        height: '100%',
        width: '100%'
    },
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
        padding: 25
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center'
    },
    boton: {
        backgroundColor: '#1e214c',
        width: '100%',
        borderRadius: 5,
        padding: 5,
        marginTop: 5
    },
    textoBoton: {
        textAlign: 'center',
        color: '#8d93f0',
    },
    textBody:{
        fontSize: 13,
        textAlign: 'justify',
        color: '#fff'
    },
    input: {
        borderWidth: 3,
        borderColor: '#29245f',
        borderRadius: 4,
        width: '100%',
        paddingLeft: 7,
        fontSize: 13,
        color: '#3b348a',
        backgroundColor: '#8d93f0'
    },
});