import {View, Text, StyleSheet, SectionList} from 'react-native';
import React,{useState} from 'react';
import { Estudiante } from '../components/Estudiante';

export const SectionListScreen = () => {
    const datos = [
        {
            titulo: 'Ingeniería en Sistemas Computacionales',
            data: [
                    {nombre: 'Alonso'},
                    {nombre: 'Luis'}
            ]
        },
        {
            titulo: 'Ingeniería en Mecatrónica',
            data: [
                    {nombre: 'Giovanni'},
                    {nombre: 'Pedro'}
            ]
        },
    ];
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Estudiantes por carrera</Text>
            <SectionList
                sections={datos}//Origen de los datos
                renderSectionHeader={({section }) => (//Renderiza el encabezado
                    <Text style={styles.header}>{section.titulo}</Text>
                )}
                renderItem={({item}) => (//Contenido del encabezado
                    <Text style={styles.item}>{item.nombre}</Text>
                )}
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
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#90caf9',
    padding: 10
  },
  item: {
    padding: 15
  }
});