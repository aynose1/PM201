import { Text } from 'react-native';

/* El export es muy importante para permitir importar esta función desde otro archivo */
export const Saludo = () => {
    /* Un componente siempre debe regresar algo */
    return(
        <Text>Hoal RN: Componente Propio</Text>
    )
};