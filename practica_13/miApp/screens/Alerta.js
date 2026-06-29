import {Alert} from 'react-native';

export const Alerta = ({props}) => {
        Alert.alert(
            'Registro Enviado',
            props,
            [
                {
                    text: 'Aceptar',
                    onPress: () => 'listo'
                }
            ]
        );
}