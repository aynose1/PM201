import React, {useState} from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function PressableScreen(){
    const [contador, setContador] = useState(0);
    const [mensaje, setMensaje] = useState('');

    return (
        //Siempre usar pressable en lugar del botón
        <View style={styles.container}>
            <Text>Componente presionablle</Text>
            <Pressable
                onPress={() => setContador(contador + 1)}
                onLongPress={() => {
                    setContador(0);
                    setMensaje('Contador reiniciado');
                }}
                onPressIn={() => setMensaje('Botón Presionado')}
                onPressOut={() => setMensaje('Botón liberado')}
                style={({pressed}) => [
                    styles.boton,
                    {backgroundColor: pressed ? '#ff6b6b':'#6bcb77'}
                ]}>
                <Text style={styles.textoBoton}>Presioname</Text>
                </Pressable>
                <Text style={styles.texto}>{contador}</Text>
                <Text style={styles.texto}>Estado: {mensaje}</Text>
                <Text styles={styles.texto}>Mantén presionado el botón para reiniciar el contador</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    boton: {
        padding: 15,
        borderRadius: 10,
        width: 180,
        alignItems: 'center'
    },
    textoBoton: {
        color: 'white',
        fontWeight: 'bold'
    }
});