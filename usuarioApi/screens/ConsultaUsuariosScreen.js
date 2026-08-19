import {SafeAreaView, View, Text, FlatList, StyleSheet, Pressable} from 'react-native';
import React, {useState, useEffect} from 'react';
import DetallesUsuarioScreen from './DetallesUsuarioScreen';
import { useRouter } from 'expo-router';


export default function ConsultaUsuariosScreen() {

  const router = useRouter();
  const [usuarios, setUsuarios] = useState([]);
  //Guarda el usuario de la tarjeta que se tocó, null significa "seguimos en la lista"
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const obtenerUsuarios = async () => {
    try {
      const respuesta = await fetch('http://127.0.0.1:5000/v1/usuarios/');
      const datos = await respuesta.json();
      console.log('Respuesta API', datos);
      setUsuarios(datos.usuarios);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  const renderTarjeta = ({item}) => (
    <View style={styles.card}>

      <Text style={styles.nombre}>{item.nombre}</Text>

      <View style={styles.linea}></View>

      <Text style={styles.info}>
        Edad: {item.edad} años
      </Text>

      <Pressable
        //pathname es la ruta y params son los datos que viajan a la otra pantalla
        onPress={() => router.push({
          pathname: '/detalles',
          params: {id: item.id, nombre: item.nombre, edad: item.edad},
        })}
      >
        <Text style={styles.verDetalles}>Ver detalles →</Text>
      </Pressable>

    </View>
  );

  if (usuarioSeleccionado) {
    return (
      <DetallesUsuarioScreen
        item={usuarioSeleccionado}
        //Al regresar se limpia el estado y vuelve a aparecer la lista
        onRegresar={() => setUsuarioSeleccionado(null)}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>
        Lista de Usuarios
      </Text>

      <FlatList
        data={usuarios}
        keyExtractor={(item) => String(item.id)}
        renderItem={renderTarjeta}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />

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
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  nombre: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2563EB',
  },

  linea: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 10,
  },

  info: {
    fontSize: 16,
    color: '#4B5563',
  },

  verDetalles: {
    alignSelf: 'flex-end',
    marginTop: 12,
    color: '#2563EB',
    fontSize: 13,
    fontWeight: '600',
  },

});