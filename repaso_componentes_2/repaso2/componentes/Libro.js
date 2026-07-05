import { StyleSheet, Text, View } from "react-native";

export const Libro = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Título: { props.titulo }</Text>
            <View style={styles.autorGenero}>
                <Text>Autor: { props.autor }</Text>
                <Text>{ props.genero }</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        width: '100%',
        flexDirection: 'column',
        marginTop: 15,
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 7,
        backgroundColor: '#96b1d7'
    },
    autorGenero: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 10
    },
    titulo: {
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#6e6e6e'
    }
});