/* Perfil usando Desestructuración */
import { View, Text, Button } from 'react-native';
import React,{useState} from 'react';

/* Se llama a cada parámetro dentro de los componentes para evitar usar la palabra props */
export const Perfil = ({nombre, carrera, materia, cuatrimestre}) => {
    const [mostrar, setMostrar] = useState(false);
    return (
        <View>
            <Text>{nombre}</Text>
            {/* Renderización condicional */}
            { mostrar &&  
            /* Fragmentos, para cuando no se quiere usar tantos views, es un fragmento de código */
                <>
                    <Text>{carrera}</Text>
                    <Text>{materia}</Text>
                    <Text>{cuatrimestre}</Text>
                </>
            }
            <Button title="Ver Perfil" onPress={ () => setMostrar(!mostrar) } />
        </View>
    );
}


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