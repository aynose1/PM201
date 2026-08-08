import { SafeAreaView, View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams, Stack } from 'expo-router';

export default function DetallesUsuarioScreen() {

  //Aquí se reciben los params que mandó router.push, ojo que siempre llegan como texto
  const {id, nombre, edad} = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>

      {/* Esto le pone encabezado solo a esta pantalla, sin tocar el layout de las demás */}
      <Stack.Screen options={{headerShown: true, title: 'Detalles'}} />

      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <View style={styles.card}>

        <Text style={styles.etiqueta}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>

        <View style={styles.linea}></View>

        <Text style={styles.etiqueta}>Edad</Text>
        <Text style={styles.valor}>{edad} años</Text>

      </View>

      <Pressable style={[styles.boton, styles.botonActualizar]}>
        <Text style={styles.textoBoton}>Actualizar</Text>
      </Pressable>

      <Pressable style={[styles.boton, styles.botonEliminar]}>
        <Text style={styles.textoBoton}>Eliminar</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 30,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  etiqueta: {
    fontSize: 13,
    color: '#9CA3AF',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },

  valor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 4,
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 15,
  },

  boton: {
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
  },

  botonActualizar: {
    backgroundColor: '#2563EB',
  },

  botonEliminar: {
    backgroundColor: '#DC2626',
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});