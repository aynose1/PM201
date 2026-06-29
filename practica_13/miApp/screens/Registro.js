import {View, Text, TextInput, Switch, StyleSheet, ScrollView, Pressable, Alert} from 'react-native';
import {SafeAreaView} from 'react-native';
import React,{useState} from 'react';
import {Pregunta} from '../components/Pregunta';
import {PreguntaSwitch} from '../components/PreguntaSwitch';


export const Registro = () => {
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');
    const [asistencia, setAsistencia] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [participacion, setParticipacion] = useState(false);

    const Alerta = () => {
    Alert.alert(
        'Registro exitoso',
        `
        Nombre: ${nombre}
        Carrera: ${carrera}
        Semestre: ${semestre}
        Taller: ${asistencia ? 'Sí' : 'No'}
        Constancia: ${constancia ? 'Sí':'No'}
        Deportes: ${participacion ? 'Sí' : 'No'}
        `, [
            {
                text: 'Aceptar',
                onPress: () => 'nada'
            }
        ]
    );
    }

    const Validacion = () => {
        Alert.alert(
            'Entradas Inválidas',
            'Todos los campos deben ser llenados',
            [
                {
                    text: 'Aceptar',
                    onPress: () => 'Nada'
                }
            ]
        );
    }

    const validarNumero = () => {
        Alert.alert(
            'Número Inválido',
            'El semestre debe ser un número',
            [
                {
                    text: 'Aceptar',
                    onPress: () => 'Nada'
                }
            ]
        );
    }

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View style={styles.cabecera}>
                    <Text style={styles.titulo}>Registro de Evento Universitario</Text>
                    <Text style={styles.subtitulo}>Porfavor, ingrese lo solicitado.</Text>
                </View>
                <View style={styles.formulario}>

                    <Pregunta
                        pregunta='Nombre Completo:'
                        placeholder='Nombre Completo'
                        valor={nombre}
                        cambio={setNombre}
                    />

                    <Pregunta
                        pregunta='Carrera:'
                        placeholder='Carrera'
                        tipo='default'
                        valor={carrera}
                        cambio={setCarrera}
                    />

                    <Pregunta
                        pregunta='Semestre:'
                        placeholder='Semestre'
                        tipo='numeric'
                        valor={semestre}
                        cambio={setSemestre}
                    />

                </View>
                <View style={styles.opciones}>
                    <Text style={styles.subtitulo}>Opciones:</Text>

                    <PreguntaSwitch
                        pregunta='¿Asistirá al taller?'
                        value={asistencia}
                        on_value_change={setAsistencia}
                    />

                    <PreguntaSwitch
                        pregunta='¿Requiere cosntancia?'
                        value={constancia}
                        on_value_change={setConstancia}
                    />

                    <PreguntaSwitch
                        pregunta='¿Participará en actividades deportivas?'
                        value={participacion}
                        on_value_change={setParticipacion}
                    />

                    <Pressable
                        style={styles.botonRegistro}
                        onPress={() => {
                            if (nombre === '' || carrera === '' || semestre === '') {
                                Validacion();
                            } else if (isNaN(semestre)) {
                                validarNumero();
                            } else {
                                Alerta();
                            }
                        }}
                    >
                        <Text
                            style={{
                                textAlign: 'center',
                                color: '#fff'
                            }}
                        >Registrar</Text>
                    </Pressable>

                </View>

            </SafeAreaView>
        </ScrollView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    cabecera: {
        padding: '8%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 25,
        color: '#176487',
        textAlign: 'center'
    },
    subtitulo: {
        fontSize: 15,
        color: '#34a1bd'
    },
    formulario: {
        height: '40%',
        padding: '10%',
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
    nombre: {
        keyboardType: 'default'
    },
    semestre: {
        keyboardType: 'numeric'
    },
    opciones: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: '10%'
    },
    botonRegistro: {
        width: '100%',
        backgroundColor: '#3d5abc',
        borderRadius: 5,
        padding: 10
        
    }
});