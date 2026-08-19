import {View, StyleSheet, Text} from 'react-native';

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>Logo</Text><Text style={styles.headerTitulo}>Escanear</Text>
            </View>
            <View style={styles.main}>

            </View>
            <View style={styles.footer}>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display='flex',
        flexDirection: 'column'
    },
    header: {
        display: 'flex',
        height: '10%',
        width: '100%',
        backgroundColor: '#3047c7'

    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        height: '80%',
        width: '100%',
    },
    footer: {
        display: 'flex',
        height: '10%',
        width: '100%',
    },
    logo: {
        height: '100%',
        width: '10%'
    },
    headerTitulo: {
        height: '100%',
        width: '90%'
    }
});