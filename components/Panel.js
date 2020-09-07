import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
export default ({ HandlerPress, lefttitle, togglepoints }) => {
    return (
        <View style={styles.panel}>
            <Button title={lefttitle} onPress={HandlerPress}></Button>
            <Button title='Mostrar/ Ocultar' onPress={togglepoints} />
        </View>
    )
}


const styles = StyleSheet.create({
    panel: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingTop: 20


    }
})