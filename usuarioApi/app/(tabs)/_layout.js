import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout () {
    return (
        <Tabs>
            {/* Nombre del ícono de navegación es el pequeño texto */}
                <Tabs.Screen name="index" options={{title:"Inicio", href:null}}/>
                <Tabs.Screen name="alta" options={{title:"Alta", tabBarIcon: ({color, size}) => (
                    <Ionicons
                          name='person-outline'
                          color={color}
                          size={size}
                    />
                )}}/>
                <Tabs.Screen name="consulta" options={{title:"Consulta",tabBarIcon: ({color, size}) => (
                    <Ionicons
                        name='menu-outline'
                        color={color}
                        size={size}
                    />
                )}}/>
        </Tabs>
    );
}