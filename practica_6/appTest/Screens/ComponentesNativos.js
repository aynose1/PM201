import React from 'react';
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingViewDemo } from "../components/KeyboardAvoidingView";
import { ActivityIndicatorDemo } from '../components/ActivityIndicator';
import { ActivityIndicatorCarga } from '../components/ActivityIndicatorCarga';

export const ComponentesNativos = () => {
    return (
        <View style={styles.pantalla}>
            <StatusBar style='dark'/>
            <ScrollView
                contentContainerStyle={styles.container}
                keyboardShouldPersistTaps={'handled'}
            >
                <Text style={styles.encabezado}>Práctica 16</Text>
                <Text style={styles.subtitulo}>Componentes Nativos: ActivityIndicator y KeyboardAvoidingView</Text>
                <ActivityIndicatorDemo/>
                <ActivityIndicatorCarga/>
                <KeyboardAvoidingViewDemo/>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
  pantalla: {
    backgroundColor: '#F1F3F6',
    flex: 1,
  },
  container: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  encabezado: {
    color: '#1D3557',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#555555',
    fontSize: 18,
    marginBottom: 25,
    textAlign: 'center',
  },
});