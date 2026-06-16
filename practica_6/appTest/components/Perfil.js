/* Perfil usando Desestructuración */
import { View, Text, Button, StyleSheet } from 'react-native';
import React,{useState} from 'react';
import App from '../App';

/* Se llama a cada parámetro dentro de los componentes para evitar usar la palabra props */
/* Es importante que si se quiere usar un estilo desde App.js es importante agregar style como parámetro para permitir más props */
export const Perfil = ({nombre, carrera, materia, cuatrimestre, style}) => {
    const [mostrar, setMostrar] = useState(false);
    return (
        /*   */
        <View style={[styles.tarjeta, style]}>
            <Text style={styles.nombre}>{nombre}</Text>
            {/* Renderización condicional */}
            { mostrar &&  
            /* Fragmentos, para cuando no se quiere usar tantos views, es un fragmento de código
            El fragmento es para evitar renderizar una vista completa, se evita usar el View,
            además se renderiza más un fragmento que una vista
            Se usa <></>
            A un fragmento no se le puede dar estilos, por ello no se pueden usar solamente fragmentos
            El fragmento es algo que no siempre se va a estar mostrando
            */
                <>
                    <Text style={styles.carrera}>{carrera}</Text>
                    <Text style={styles.materia}>{materia}</Text>
                    <Text style={styles.cuatrimestre}>{cuatrimestre}</Text>
                </>
            }
            <Button title="Ver Perfil" onPress={ () => setMostrar(!mostrar) } />
        </View>
    );
}
/* Son objetos de JS por lo que deben pasarse como objetos JSON entre llaves */
const styles = StyleSheet.create({
    nombre: {
        fontSize: 24,
        fontWeight: 600,
        /* Convertir texto a mayúsculas */
        textTransform: 'uppercase'
    },
    carrera: {
        fontSize: 18,
        color: 'red',
        fontFamily: 'Roboto'
    },
    materia: {
      fontSize: 12,
      fontFamily: 'Courier',
      fontStyle: 'italic'
    },
    cuatrimestre: {
        fontSize: 10,
    },
    tarjeta: {
        /* Borde de tarjeta */
        borderWidth: 2,
        padding: 25,
        
    },
});

/*  Perfil usando prps
import { View, Text } from 'react-native';

El parámetro props nos permite usar propiedades 
export const Perfil = (props) => {
    return (
        <View>
            <Text>{props.nombre}</Text>
            <Text>{props.carrera}</Text>
            <Text>{props.materia}</Text>
            <Text>{props.cuatrimestre}</Text>
        </View>
    );
} */