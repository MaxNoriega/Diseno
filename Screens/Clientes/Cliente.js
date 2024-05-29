<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> 01080581d6ace6368a594017836257b421479d56
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cliente({ modalVisible, setModalVisible, clientes, setClientes }) {

  const [nomC, setNomC] = useState('')
  const [apellC, setApellC] = useState('')
  const [telC, setTelC] = useState('')
  const [direC, setDireC] = useState('')
  const [cEX, setCEX] = useState('')

<<<<<<< HEAD
 
  const handleNext = async () => {
=======
  const handleNext = () => {
>>>>>>> 01080581d6ace6368a594017836257b421479d56
    if ([nomC, apellC, telC, direC].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      )
      return
    }
    const newClientes = {
      id: Date.now(),
      nomC,
      apellC,
      telC,
      direC,
    }
    console.log([...clientes, newClientes])
<<<<<<< HEAD
    const updatedClientes = ([...clientes, newClientes]);
    try {
      await AsyncStorage.setItem('clientes', JSON.stringify(updatedClientes));
      setClientes(updatedClientes);
    } catch (error) {
      console.log('Error saving productos to AsyncStorage', error);
    }
=======
    setClientes([...clientes, newClientes]);
    
>>>>>>> 01080581d6ace6368a594017836257b421479d56
    setNomC('')
    setApellC('')
    setTelC('')
    setDireC('')
  }

<<<<<<< HEAD
  const handleSave = async () => {
=======
  const handleSave = () => {
>>>>>>> 01080581d6ace6368a594017836257b421479d56
    if ([nomC, apellC, telC, direC].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      )
      return
    }
    const newClientes = {
      id: Date.now(),
      nomC,
      apellC,
      telC,
      direC,
    }
    console.log([...clientes, newClientes])
<<<<<<< HEAD
    const updatedClientes = ([...clientes, newClientes]);
    try {
      await AsyncStorage.setItem('clientes', JSON.stringify(updatedClientes));
      setClientes(updatedClientes);
    } catch (error) {
      console.log('Error saving productos to AsyncStorage', error);
    }
    
    

    setNomC('')
    setApellC('')
    setTelC('')
    setDireC('')
    setModalVisible(!modalVisible)
  }

=======
    setClientes([...clientes, newClientes]);
    setModalVisible(!modalVisible)

    setNomC('')
    setApellC('')
    setTelC('')
    setDireC('')
  }



>>>>>>> 01080581d6ace6368a594017836257b421479d56
  return (
    <Modal
      animationType='slide'
      visible={modalVisible}
    >

      <View style={styles.contenido}>
        <ScrollView>
          <View style={styles.header}>
            <TouchableOpacity style={styles.btncancelar} onPress={() => setModalVisible(false)}>
              <Image source={require('../../icons/regresar.png')} style={styles.btncancelarIcon} />
            </TouchableOpacity>
            <Text style={styles.titulo}> Cliente </Text>
            <TouchableOpacity style={styles.btnGuardar} onPress={handleSave}>
              <Text style={styles.btnGuardarTexto}>Guardar</Text>
            </TouchableOpacity>
          </View>
          <View>
          </View>

          <View style={styles.campInput}>
            <Text style={styles.label}>Nombre: </Text>
            <TextInput
              style={styles.input}
              placeholder='Nombre del Cliente'
              placeholderTextColor={'#000000'}
              value={nomC}
              onChangeText={setNomC}
            />
          </View>

          <View style={styles.campInput}>
            <Text style={styles.label}>Apellido:</Text>
            <TextInput
              style={styles.input}
              placeholder='Apellido del Cliente'
              placeholderTextColor={'#000000'}
              value={apellC}
              onChangeText={setApellC}
            />
          </View>


          <View style={styles.campInput}>
            <Text style={styles.label}>Teléfono:</Text>
            <TextInput
              style={styles.input}
              placeholder='Teléfono del Cliente'
              placeholderTextColor={'#000000'}
              keyboardType='number-pad'
<<<<<<< HEAD
              maxLength={10}
=======
>>>>>>> 01080581d6ace6368a594017836257b421479d56
              value={telC}
              onChangeText={setTelC}
            />
          </View>


          <View style={styles.campInput}>
            <Text style={styles.label}>Dirección:</Text>
            <TextInput
              style={styles.input}
              placeholder='Dirección del Cliente'
              placeholderTextColor={'#000000'}
              value={direC}
              onChangeText={setDireC}
            />
          </View>

          <View style={styles.campInput}>
            <Text style={styles.labelID}>Identificador:</Text>
            <Text style={styles.labelIDIN}>0000</Text>
          </View>
 
   <View>
   <Text style={styles.labelCliEx}>Existente:</Text>
   </View>


          <View style={{ flexDirection:'row', alignContent:'space-between'}}>
            <View style={styles.campInputCliEx}>
              <View style={styles.pickerContainerColor}>
                <Picker
                  selectedValue={cEX}
                  style={styles.pickerCliEx}
                  onValueChange={(itemValue, itemIndex) =>
                    setCEX(itemValue)
                  }>
                  <Picker.Item label="José" value="José" />
                </Picker>
              </View>
            </View>

            <TouchableOpacity onPress={handleNext} style={styles.addButton}>
              <Image source={require('../../icons/add.png')} style={styles.addButtonIcon} />
            </TouchableOpacity>
          </View>
        </ScrollView>

      </View>
    </Modal>
  )

}
const styles = StyleSheet.create({

  contenido: {
    flex: 1,
    backgroundColor: '#7A88AF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#42558D',
    padding: 5,
  },
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFF',
    marginLeft: 20,
    marginTop: 10
  },
  btncancelar: {
    marginTop: 5,
    borderColor: '#000000',
  },
  btncancelarIcon: {
    width: 50,
    height: 50,
    marginVertical: 5

  },
  btnGuardar: {
    backgroundColor: '#303D65',
    padding: 10,
    borderColor: '#000000',
    borderWidth: 1,
    marginLeft: 40,
    height: 40,
    marginTop: 15

  },
  btnGuardarTexto: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
    textTransform: 'uppercase',
  },
  campInput: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    marginTop: 30,
    marginLeft: 20,

  },
  label: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: '600',
  },
  labelID: {
    color: '#FFF',
    marginBottom: 10,
    marginTop: 15,
    marginRight:60,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 3,
    marginBottom: 5,
    width: 250,
    borderWidth: 1,
    marginHorizontal:30,
    borderColor: 'black',
  },
  labelIDIN:{
    color: '#FFF',
    marginBottom: 5,
    marginTop: 15,
    fontSize: 25,
    fontWeight: '600',
  },

  pickerCliEx: {
    width: 200,
    backgroundColor: '#FFF',
  },
  pickerContainerColor: {
    borderWidth: 1,
    width:202,
    height: 57,
    borderColor: 'black',
    marginLeft: 5,
  },
  addButton: {
    borderRadius: 5,
    marginTop:10,
    marginLeft:60,
    marginRight: 20,
  },
  addButtonIcon: {
    width: 120,
    height: 120,
  },
  campInputCliEx: {
    marginTop: 10,
    marginLeft: 20,

  },
  labelCliEx:{
    color: '#FFF',
    marginLeft:40,
    marginTop: 140,
    fontSize: 20,
    fontWeight: '600',
  }


});