import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';
export default ({ onLongPress, puntos, showpointer }) => {
    //console.log(puntos)
    return (
        <MapView style={styles.map} onLongPress={onLongPress}>
            {showpointer &&
                puntos.map(p =>
                    <Marker
                        key={p.name}
                        coordinate={p.coordinate}
                        title={p.name}

                    ></Marker>
                )}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 140
    }
});