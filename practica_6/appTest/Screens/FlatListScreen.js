import {View, Text, StyleSheet, FlatList} from 'react-native';
import React,{useState} from 'react';
import {Estudiante} from '../components/Estudiante';

export const FlatListScreen = () => {
    const estudiantes = [
        {
            id: '1',
            nombre: 'Alonso',
            carrera: 'ISC'
        },
        {
            id: '2',
            nombre: 'Luis',
            carrera: 'ITIID'
        },
        {
            id: '3',
            nombre: 'Aldo',
            carrera: 'ISC'
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Lista de estudiantes</Text>
            <FlatList
                style={styles.card}
                data={estudiantes}//Origen
                renderItem={({item}) => (//Dice qué es lo que se va a extraer o iterar
                    <Estudiante
                        nombre={item.nombre}
                        carrera={item.carrera}
                    />
                )}
                keyExtractor={(item) => item.id}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 20
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold'
    },

    card: {
        backgroundColor: '#d4f1f4',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }

});