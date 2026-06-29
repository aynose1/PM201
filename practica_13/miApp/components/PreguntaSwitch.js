import {View, Text, Switch, StyleSheet} from 'react-native';

export const PreguntaSwitch = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.pregunta}</Text>
            <Switch
                value={props.value}
                onValueChange={props.on_value_change}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});