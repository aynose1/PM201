/* Zona 1: Improtaciones de archivos y componentes */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import React,{useEffect, useState} from 'react';
import TarjetasScreen from '../Screens/TarjetasScreen';
import Componente1 from './Componente1';
import {ImagenFondo} from './ImagenFondo';
import { SplashScreen } from './SplashScreen';
import { Home } from './Home';

/* Zona 2: Main - Componentes del Screen */
export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    useEffect(() => {
        if (screen === 'splashScreen') {
            const timer = setTimeout(() => {
                setScreen('home');
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [screen]);

    switch (screen) {
        case 'tarjetas': 
            return <TarjetasScreen/>;
        case 'componente1': 
            return <Componente1/>;
        case 'imagenFondo':
            return <ImagenFondo style={styles.container}/>;
        case 'home':
            return <Home/>
        case 'splashScreen':
            return <SplashScreen/>
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                        <Text>Menú de prácticas</Text>
                        <Button title='Práctica Tarjetas' onPress={ () => setScreen('tarjetas') }/>

                        <Button title='Práctica 1' onPress={() => setScreen('componente1') }/>

                        <Button title='Imagen Bg' onPress={() => setScreen('imagenFondo')}/>

                        <Button title='Splash' onPress={() => setScreen('splashScreen')}/>
                    </View>
                );//Return
    }//Switch
}//Función

/* Zona 3: Estilos y posicionamiento */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* Tanto para alignItems y alignItems ambos dependen del valor de flexDirection */
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
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
  botones: {
    padding: 15,
    margin: 15
  }
});
