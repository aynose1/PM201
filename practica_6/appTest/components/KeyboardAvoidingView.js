import React,{useState} from 'react';
import {View, Text, KeyboardAvoidingView, StyleSheet, TextInput, Platform} from 'react-native';

export const KeyboardAvoidingViewDemo = () => {
    const [nombre, setNombre] = useState('');
    const behavior = Platform.OS === 'ios' ? 'padding' : 'height';//Para poner que el tamaño del teclado se ponga de un tamaño dependiendod de si es Android o IOS, depende del teléfono en el que se esté renderizando la aplicación

    return (
      <KeyboardAvoidingView
        behavior={behavior}
        style={styles.container}
        enabled
      >
            <Text style={styles.titulo}>KeyboardAvoidingView</Text>
            
            <Text style={styles.descripcion}>Evite que el taclado oculte el campo de texto. En este dispositivo se utiliza behavior='behavior'</Text>

            <TextInput
                placeholder='Escribe tu nombre'
                style={styles.input}
                value={nombre}
                onChangeText={setNombre}
                autoCapitalize='words'//Indica qué se autocapitaliza
            />
            {/* Condiciona que si no hay un valor en nombre se genera la cadena "Sin capturar" */}
            <Text style={styles.resultado}>Nombre: {nombre || 'Sin capturar'}</Text>

        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    elevation: 3,
    marginBottom: 20,
    padding: 20,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  descripcion: {
    color: '#444444',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderColor: '#777777',
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  resultado: {
    fontSize: 16,
  },
});