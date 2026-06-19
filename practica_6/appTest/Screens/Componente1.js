/* Zona 1: Improtaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

/* Zona 2: Main - Componentes del Screen */
export default function Componente1() {
  return (
    <View>
        <Text>Aquí va la primer práctica de componentes nativos</Text>
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

});
