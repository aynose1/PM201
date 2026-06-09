import { Text, Image, Button, View } from 'react-native';

/* El export es muy importante para permitir importar esta función desde otro archivo */
export const Saludo_2 = () => {
    /* Un componente siempre debe regresar algo */
    return(
        <View>
            {/* Estos elementos son elementos hijos, por lo que deben tener un padre, un elemento View */}
            <Text>Hola RN: Componente Propio</Text>
            <Image source={require('../assets/wave.png')}/>
            <Button title="Hola S201"></Button>
        </View>
    )
};