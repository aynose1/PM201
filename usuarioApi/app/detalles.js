import { SafeAreaView, View, Text, StyleSheet, Pressable, Modal, Alert, Platform } from 'react-native';
import React, { useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { API, headers } from '../config/api';

export default function DetallesUsuarioScreen() {

  const router = useRouter();
  //Los params siempre llegan como texto, aunque en la lista fueran números
  const { id, nombre, edad } = useLocalSearchParams();

  //Controla si el modal está abierto
  const [modalVisible, setModalVisible] = useState(false);
  const [borrando, setBorrando] = useState(false);

  const mostrarMensaje = (titulo, mensaje) => {
    if (Platform.OS == 'web') {
      window.alert(`${titulo}\n\n${mensaje}`);
    } else {
      Alert.alert(titulo, mensaje);
    }
  };

  const eliminar = async () => {
    try {
      setBorrando(true);
      const respuesta = await fetch(`${API}/${id}`, {
        method: 'DELETE',
        headers: headers,
      });

      //fetch no lanza error con un 401 o un 404, hay que revisar el ok a mano
      if (!respuesta.ok) {
        console.log('Fallo del servidor:', respuesta.status);
        mostrarMensaje('Error', `El servidor respondió ${respuesta.status}`);
        return;
      }

      setModalVisible(false);
      mostrarMensaje('Listo', 'Usuario eliminado');
      //Regresa a la lista, que se refresca sola por el useFocusEffect
      router.back();

    } catch (error) {
      mostrarMensaje('Error', 'No fue posible eliminar');
      console.log(`Error: ${error}`);
    } finally {
      setBorrando(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Detalles del Usuario</Text>

      <View style={styles.card}>

        <Text style={styles.etiqueta}>Nombre</Text>
        <Text style={styles.valor}>{nombre}</Text>

        <View style={styles.linea}></View>

        <Text style={styles.etiqueta}>Edad</Text>
        <Text style={styles.valor}>{edad} años</Text>

      </View>

      <View style={styles.botonera}>

        {/* Manda los datos actuales para que el formulario llegue precargado */}
        <Pressable
          style={[styles.boton, styles.botonActualizar]}
          onPress={() => router.push({
            pathname: '/actualizar',
            params: { id, nombre, edad },
          })}
        >
          <Text style={styles.textoActualizar}>Actualizar</Text>
        </Pressable>

        <Pressable
          style={[styles.boton, styles.botonEliminar]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.textoEliminar}>Eliminar</Text>
        </Pressable>

      </View>

      {/* transparent deja ver la pantalla de atrás, el fondo gris lo pone el overlay */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>

          <View style={styles.modalCard}>

            <Text style={styles.modalTitulo}>Confirmar eliminación</Text>

            <Text style={styles.modalTexto}>
              ¿Estás seguro de que deseas eliminar al usuario {nombre}?
            </Text>

            <View style={styles.modalBotones}>

              <Pressable
                style={[styles.modalBoton, styles.modalCancelar]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalTextoCancelar}>Cancelar</Text>
              </Pressable>

              {/* Solo aquí se llama a la API, si cancela no pasa nada */}
              <Pressable
                style={[styles.modalBoton, styles.modalConfirmar]}
                onPress={eliminar}
                disabled={borrando}
              >
                <Text style={styles.modalTextoConfirmar}>
                  {borrando ? 'Eliminando...' : 'Sí, eliminar'}
                </Text>
              </Pressable>

            </View>

          </View>

        </View>
      </Modal>

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

  card: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  etiqueta: {
    fontSize: 12,
    color: '#9CA3AF',
  },

  valor: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1F2937',
    marginTop: 3,
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 14,
  },

  botonera: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
  },

  boton: {
    width: '55%',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },

  botonActualizar: {
    backgroundColor: '#FACC15',
  },

  botonEliminar: {
    backgroundColor: '#DC2626',
  },

  textoActualizar: {
    color: '#1F2937',
    fontSize: 13,
    fontWeight: 'bold',
  },

  textoEliminar: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },

  modalCard: {
    width: '100%',
    backgroundColor: '#F3F4F6',
    borderRadius: 14,
    padding: 20,
  },

  modalTitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 10,
  },

  modalTexto: {
    fontSize: 13,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 20,
  },

  modalBotones: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
  },

  modalBoton: {
    paddingVertical: 9,
    paddingHorizontal: 18,
    borderRadius: 7,
  },

  modalCancelar: {
    backgroundColor: '#E5E7EB',
  },

  modalConfirmar: {
    backgroundColor: '#DC2626',
  },

  modalTextoCancelar: {
    color: '#374151',
    fontSize: 13,
    fontWeight: '600',
  },

  modalTextoConfirmar: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },

});