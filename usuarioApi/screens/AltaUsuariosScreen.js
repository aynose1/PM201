import React, { useState } from 'react';
import {View,SafeAreaView,Text,TextInput,Pressable,StyleSheet,Alert,Platform} from 'react-native';

export default function App() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  //Estado para inhabilitar el botón
  const [cargando, setCargando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if(Platform.OS == 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  }

  const guardarUsuario = async () => {
    //Quitar espacios a la izquierda y a la derecha
    if (nombre.trim() === '' || edad.trim() === '') {
      mostrarMensaje('Vacíos', 'Llena nombre y edad para continuar');
      return;
    }
    try {
      setCargando(true);
      //Por defecto al llamar a la API se usa el método GET, pero para POST esto debe indicarse
      const respuesta = await fetch('http://192.168.100.98:5000/v1/usuarios/',
        {
          method: 'POST',
          //Se define qué tipo de información voy a enviar, en este caso un JSON
          headers: {'Content-Type':'application/json'},
          //En todos los envíos se envía un body, es el cuerpo del POST, es lo que tengo guardado en los state nombre y edad.
          //Para enviarlo en formato JSON se utiliza el objeto JSON y su método stringify
          body: JSON.stringify({nombre: nombre, edad: edad}),
        }
      );

      const datos = await respuesta.json();
      console.log(datos);
      mostrarMensaje('Éxito', 'Usuario Registrado Exitosamente');
      //Borrar el contenido de los Input después de la alerta
      setNombre('');
      setEdad('');
    } catch (error) {
      mostrarMensaje('Error', 'No fué posible guardar usuario');
      console.log(`Error: ${error}`);
    } finally {
      //Esto se ejecuta sin importar si entra en try o catch, es algo que siempre se tiene que hacer
      setCargando(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.titulo}>
          Registro de Usuarios
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />

        <TextInput
          style={styles.input}
          placeholder="Edad del usuario"
          keyboardType="numeric"
          value={edad}
          onChangeText={setEdad}
        />

        <Pressable
          style={styles.boton}
          onPress={guardarUsuario}
          disabled={cargando}
        >
          <Text style={styles.textoBoton}>
            {/* Se usa un estilo condicional */}
            {cargando ? 'Guardando...': 'Agregar Usuario'}
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 25,
    borderRadius: 15,
    elevation: 5, 
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#1F2937',
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 18,
    backgroundColor: '#F9FAFB',
    fontSize: 16,
  },

  boton: {
    backgroundColor: '#29bb0c',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBoton: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

});