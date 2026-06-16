/* Zona 1: Improtaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Saludo } from './components/Saludo';
import { Saludo_2 } from './components/Saludo_2';
import { Perfil } from './components/Perfil';

/* Zona 2: Main - Componentes del Screen */
export default function App() {
  return (

    <View style={styles.container}>

      <Perfil style={styles.tarjetaAzul} nombre="Luis Alonso García Vázquez" carrera="Ingeniería en Sistemas Computacionales" materia="Programación Móvil" cuatrimestre="Noveno" />

      <Perfil style={styles.tarjetaVerde} nombre="Diego" carrera="Ingeniería en Sistemas Computacionales" materia="Álgebra Lineal" cuatrimestre="Primero" />

      <Perfil style={styles.tarjetaVerde} nombre="Diego" carrera="Ingeniería en Sistemas Computacionales" materia="Álgebra Lineal" cuatrimestre="Primero" />

      {/* El estatus bar es la zona de la barra superior de la pantalla de los teléfonos */}
      <StatusBar style="auto" />

    </View>

  );
}

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* Tanto para alignItems y alignItems ambos dependen del valor de flexDirection */
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row'
    /* 
    flexDirection: 'column'
    justifyContent: 'flex-start',
    justifyContent: 'center',
    justifyContent: 'flex-end',
    justifyContent: 'space-between',
    justifyContent: 'space-around',
    justifyContent: 'space-evenly',
    */
  },
  tarjetaVerde: {
    backgroundColor: '#fd928e',

  },
  tarjetaAzul: {
    backgroundColor: '#88fbf9',

  }
});
