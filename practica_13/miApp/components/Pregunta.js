import {View, Text, TextInput, StyleSheet} from 'react-native'

export const Pregunta = (props) => {
    return (
        <View>
            <Text>{props.pregunta}</Text>
            <TextInput
                style={styles.cajaTexto}
                placeholder={props.placeholder}
                keyboardType={props.tipo}
                value={props.valor}
                onChangeText={props.cambio}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    cajaTexto: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#a4a4a4',
        borderRadius: 10,
        marginBottom: 10
    }
});