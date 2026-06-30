import {View, Text, StyleSheet} from 'react-native';

export const Estudiante = (props) => {
    return (
        <View style={styles.card}>
            <Text>Nombre: {props.nombre}</Text>
            <Text>Carrera: {props.carrera}</Text>
        </View>
        
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#6bcb77',
        padding: 15,
        margin: 10,
        borderRadius: 10
    }
});