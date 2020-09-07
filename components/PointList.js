import React from 'react'
import { FlatList, Text, View, StyleSheet, Dimensions, Button } from 'react-native'
export default ({ puntos, handlerClose }) => {
    return (
        <>
            <View style={styles.list}>
                <FlatList
                    data={puntos.map(c => c.name)}
                    renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
                    keyExtractor={item => item}
                ></FlatList>
            </View>
            <View style={styles.button}>
                <Button title='Cerrar' onPress={handlerClose} > </Button>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    button: {
        paddingBottom: 15
    },
    list: {
        height: Dimensions.get('window').height - 450
    },
    item: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        height: 50,
        justifyContent: 'center',
        padding: 15
    }

})