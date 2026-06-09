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
      {/* Puede ser de esta forma o una eyiqueta de autocierre <Image/> */}
      <Image source={require('./assets/wave.png')}/>

      <Text>Hola Mundo</Text>
      <Text>------------------------------------</Text>
      <Saludo/>

      <Text>------------------------------------</Text>
      <Saludo_2/>

      <Text>------------------------------------</Text>
      <Perfil/>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
