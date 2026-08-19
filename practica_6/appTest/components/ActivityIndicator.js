import {View, ActivityIndicator, Text, Button, StyleSheet} from 'react-native';
import React, {useState} from 'react';

export const ActivityIndicatorDemo = () => {
    const [loading, setLoading] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>ActivityIndicator</Text>

            <Text style={styles.descripcion}>
                La prop animating controla si el indicador se muestra o no.
                También se puede usar para cambiar el tamaño "size" y el color.
            </Text>

            <Button
                title='Mostrar/Ocultar Spinner'
                onPress={() => setLoading((estadoActual) => !estadoActual)}
            />

            <View style={styles.indicador}>
                <ActivityIndicator
                    size='large'
                    color='blue'
                    animating={loading}
                />
            </View>

            <View style={styles.estado}>
                <Text>Estado Actual: {loading ? 'Cargando' : 'Detenido'}</Text>
            </View>
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
  estado: {
    fontWeight: '600',
  },
});