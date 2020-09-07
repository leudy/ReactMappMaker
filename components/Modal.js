import React from 'react'
import { StyleSheet, Modal, View, Text, Dimensions } from 'react-native'

export default ({ children, visible }) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visible}
        >
            <View style={styles.center}>
                <View style={styles.modalView}>
                    {children}
                </View>
            </View>
        </Modal>

    )
}


const styles = StyleSheet.create({
    center: {

        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'
    },

    modalView: {
        minWidth: Dimensions.get('window').width - 85,
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            height: 3,
            width: 0
        }
    }
})