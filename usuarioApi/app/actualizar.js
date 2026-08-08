import { SafeAreaView, View, Text, TextInput, StyleSheet, Pressable, Alert, Platform } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { API, headers } from '../config/api';

export default function ActualizarUsuarioScreen() {

  const router = useRouter();
  const { id, nombre: nombreParam, edad: edadParam } = useLocalSearchParams();

  //Aquí está lo de "datos ya precargados": el estado arranca con lo que llegó por params
  const [nombre, setNombre] = useState(nombreParam ?? '');
  const [edad, setEdad] = useState(String(edadParam ?? ''));
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS == 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const guardarCambios = async () => {
    //Estas reglas son las del schema UsuarioBase de tu API, así evitas el 422
    if (nombre.trim().length < 3 || nombre.trim().length > 50) {
      mostrarMensaje('Revisa', 'El nombre debe tener entre 3 y 50 caracteres');
      return;
    }
    const edadNumero = parseInt(edad, 10);
    if (isNaN(edadNumero) || edadNumero < 0 || edadNumero > 120) {
      mostrarMensaje('Revisa', 'La edad debe ser un número entre 0 y 120');
      return;
    }
    try {
      setCargando(true);
      const respuesta = await fetch(`${API}/${id}`, {
        method: 'PUT',
        headers: headers,
        //La edad va como número, si va como texto la API responde 422
        body: JSON.stringify({ nombre: nombre.trim(), edad: edadNumero }),
      });

      if (!respuesta.ok) {
        const detalle = await respuesta.text();
        console.log('Fallo del servidor:', respuesta.status, detalle);
        mostrarMensaje('Error', `El servidor respondió ${respuesta.status}`);
        return;
      }

      const datos = await respuesta.json();
      console.log(datos);
      mostrarMensaje('Listo', 'Usuario actualizado');

      //Se salta el detalle y vuelve a la lista. Si usara back() caería en el detalle,
      //que todavía traería los datos viejos en sus params.
      router.replace('/(tabs)/consulta');

    } catch (error) {
      mostrarMensaje('Error', 'No fue posible actualizar');
      console.log(`Error: ${error}`);
    } finally {
      setCargando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Actualizar Usuario</Text>

      <View style={styles.cuerpo}>

        <Text style={styles.etiqueta}>Nombre</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.etiqueta}>Edad</Text>
        <TextInput
          style={styles.input}
          value={edad}
          onChangeText={setEdad}
          keyboardType="numeric"
        />

        <Pressable
          style={styles.boton}
          onPress={guardarCambios}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {cargando ? 'Guardando...' : 'Guardar cambios'}
          </Text>
        </Pressable>

      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    paddingVertical: 14,
    backgroundColor: '#EFF1F5',
  },

  cuerpo: {
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  etiqueta: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 6,
  },

  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 7,
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: '#FFFFFF',
    fontSize: 14,
    color: '#1F2937',
  },

  boton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    borderRadius: 7,
    alignItems: 'center',
    marginTop: 5,
  },

  textoBoton: {
    color: '#1F2937',
    fontSize: 13,
    fontWeight: 'bold',
  },

});