import {View, Text, ActivityIndicator, Button, StyleSheet, DrawerLayoutAndroid} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';

export const ActivityIndicatorCarga = () => {
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState('Presiona el botón para comenzar');
    const temprizador = useRef(null);

    useEffect(() => {
        return () => clearTimeout(temprizador.current);
    }, []);

    const cargarDatos = () => {
        clearTimeout(temprizador.current);
        setLoading(true)
        setMensaje('Cargando información...');
        temprizador.current = setTimeout(() => {
        setLoading(false);
        setMensaje('Datos cargados correctamente');

    }, 3000);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>
                Simulación de carga
            </Text>

            <Text style={styles.descripcion}>
                Este ejemplo simula tres segundos
            </Text>

            <Button
                title={loading ? 'Cargando...' : 'Obtener datos'}
                onPress={cargarDatos}
                disabled={loading}
                color='green'
            />

            <View style={styles.indicador}>
                <ActivityIndicator
                    size='large'
                    color='green'
                    animating={loading}
                />
            </View>
            <Text style={styles.texto}>{mensaje}</Text>
        </View>
    );
    
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  },
  descripcion: {
    color: '#444444',
    lineHeight: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  indicador: {
    height: 60,
    justifyContent: 'center',
    marginTop: 10,
  },
  texto: {
    fontSize: 16,
    textAlign: 'center',
  },
});