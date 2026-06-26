import React,{useState} from 'react';
import {View, Text, Alert, SafeAreaView, StyleSheet, Button} from 'react-native';


export const Alerta = () => {
    const [message, setMessage] = useState('Sin acción')
    const createTwoButtonAlert = () => {
        Alert.alert('Alerta 2 botones', 'Elige una opción', [
            {
                text: 'Cancelar',
                onPress: () => {setMessage('Presionaste cancelar')},
                style: 'cancel'//Cancelar es el único que uede tener estilo
            },
            {
                text: 'Aceptar',
                onPress: () => {setMessage('Presionaste Aceptar')},
            }

    ])}

    const createThreeButtonAlert = () => {
        Alert.alert('Alerta 3 botones', 'Elige una opción', [
            {
                text: 'Preguntame más tarde',
                onPress: () => {setMessage('Presionaste más tarde')},
            },
            {
                text: 'Cancelar',
                onPress: () => {setMessage('Presionaste cancelar')},
                style: 'cancel'//Cancelar es el único que uede tener estilo
            },
            {
                text: 'Aceptar',
                onPress: () => {setMessage('Presionaste Aceptar')},
            },
            {
                cancelable: true,
                onDismiss: () => {setMessage('La alerta se cerró sin elegir botón')}
            }

    ])}
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Estado actual: {message}</Text>
            <View style={styles.button}>
                <Button title="Alerta de 2 botones" onPress={createTwoButtonAlert}/>
                <Button title="Alerta de 3 botones" onPress={createThreeButtonAlert}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    }
});