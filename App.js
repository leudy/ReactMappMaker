import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Map, Modal, Panel, Input, PointList } from './components'


export default function App() {
  // agregarr set state
  const [showModal, setShowModal] = useState(false)
  const [nombre, setNombre] = useState('')
  const [puntos, setPuntos] = useState([])
  const [puntosTemp, setPuntosTemp] = useState([])
  const [VisitibilityFilter, setVisitibilityFilter] = useState('new_point')
  const [showPointer, setshowPointer] = useState(true)
  // set stat for modal
  const handleLongPress = ({ nativeEvent }) => {
    let newPuntos = { coordinate: nativeEvent.coordinate };
    setPuntosTemp(newPuntos);
    setVisitibilityFilter('new_point');
    setShowModal(true)
  }

  const handlerChangeInput = text => {
    setNombre(text)
  }


  const handlerSubmit = () => {
    let newPoint = { ...puntosTemp, name: nombre }
    setPuntos(puntos.concat(newPoint));
    clearFields();
  }


  const clearFields = () => {
    setNombre('')
    setShowModal(false)
  }


  const HandlerList = () => {
    setVisitibilityFilter('all_points')
    setShowModal(true)
  }

  const toggleShow = () => {
    setshowPointer(!showPointer);
  }

  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} showpointer={showPointer} />
      <Modal visible={showModal}>
        {VisitibilityFilter === 'new_point' ?
          <>
            <View style={styles.form}>
              <Input title='Nombre del punto' onChangeText={handlerChangeInput}
                placeholder='Digita un nombre'
              />
              <Button title='Guardar punto' onPress={handlerSubmit} ></Button>
              <Button title='Cancelar' onPress={() => { setShowModal(false) }}></Button>
            </View>

          </>
          :
          <>
            <PointList puntos={puntos} handlerClose={() => { setShowModal(false) }} ></PointList>

          </>
        }


      </Modal>
      <Panel HandlerPress={HandlerList} lefttitle='Lista' togglepoints={toggleShow} />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
