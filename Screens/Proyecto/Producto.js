import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Product({ modalVisible, setModalVisible, productos, setProductos }) {

    const [ancho, setAncho] = useState('')
    const [alto, setAlto] = useState('')
    const [cristal, setCristal] = useState('')
    const [color, setColor] = useState('')
    const [mdo, setMDO] = useState('')

    const handleNext = () => {
        if ([ancho, alto, cristal, color, mdo].includes('')) {
          Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
          )
          return
        }
        const newProductos = {
          id: Date.now(),
          ancho,
          alto,
          cristal,
          color,
          mdo,
        }
        console.log([...productos, newProductos])
        setProductos([...productos, newProductos]);
        
        setAncho('')
        setAlto('')
        setCristal('')
        setColor('')
        setMDO('')
      }

      const handleSave = () => {
        if ([ancho, alto, cristal, color, mdo].includes('')) {
          Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
          )
          return
        }
        const newProductos = {
          id: Date.now(),
          ancho,
          alto,
          cristal,
          color,
          mdo,
        }
        console.log([...productos, newProductos])
        setProductos([...productos, newProductos]);
        setModalVisible(!modalVisible)

        setAncho('')
        setAlto('')
        setCristal('')
        setColor('')
        setMDO('')
      }


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
                        <Text style={styles.titulo}> Producto </Text>
                        <TouchableOpacity style={styles.btnGuardar} onPress={handleSave}>
                            <Text style={styles.btnGuardarTexto}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.subTitulo}> Medida </Text>
                    </View>

                    <View style={styles.campInput}>
                        <Text style={styles.label}>Ancho:</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Ancho (m)'
                            placeholderTextColor={'#000000'}
                            keyboardType='number-pad'
                            value={ancho}
                            onChangeText={setAncho}
                        />
                    </View>

                    <View style={styles.campInput}>
                        <Text style={styles.label}>Alto:     </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Alto (m)'
                            placeholderTextColor={'#000000'}
                            keyboardType='number-pad'
                            value={alto}
                            onChangeText={setAlto}
                        />
                    </View>

                    <View>
                        <Text style={styles.subTitulo}> Material </Text>
                    </View>

                    <View style={styles.campInput}>
                        <Text style={styles.label}>Cristal:   </Text>
                        <View style={styles.pickerContainerCristal}>
                            <Picker
                                selectedValue={cristal}
                                style={styles.pickerMaterial}
                                onValueChange={(itemValue, itemIndex) =>
                                    setCristal(itemValue)
                                }>
                                <Picker.Item label="Concreto" value="concreto" />
                                <Picker.Item label="Madera" value="madera" />
                                <Picker.Item label="Acero" value="acero" />
                                <Picker.Item label="Ladrillo" value="ladrillo" />
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.campInput}>
                        <Text style={styles.label}>Color:   </Text>
                        <View style={styles.pickerContainerColor}>
                            <Picker
                                selectedValue={color}
                                style={styles.pickerMaterial}
                                onValueChange={(itemValue, itemIndex) =>
                                    setColor(itemValue)
                                }>
                                <Picker.Item label="Concreto" value="concreto" />
                                <Picker.Item label="Madera" value="madera" />
                                <Picker.Item label="Acero" value="acero" />
                                <Picker.Item label="Ladrillo" value="ladrillo" />
                            </Picker>
                        </View>
                    </View>

                    <View style={styles.campInput}>
                        <Text style={styles.label}>MDO%: </Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Porcentaje de mano de obra "00%"'
                            placeholderTextColor={'#000000'}
                            keyboardType='number-pad'
                            value={mdo}
                            onChangeText={setMDO}
                        />
                    </View>
                    <View style={styles.campoFin}>
                        <Text style={styles.labelfin}>Costo total</Text>
                        <Text style={styles.costoTotal}></Text>
                    </View>


                    <View style={{ alignItems: 'flex-end'}}>
                        <TouchableOpacity onPress={handleNext}>
                            <Image source={require('../../icons/add.png')} style={styles.addButtonIcon} />
                        </TouchableOpacity>
                    </View>
                    </ScrollView>
            </View>
            <StatusBar style='auto' />
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
    subTitulo: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '600',
        color: '#FFF',
        marginTop: 10
    },
    campInput: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 20

    },
    label: {
        textAlign: 'center',
        color: '#FFF',
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: '600',
    },
    input: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 3,
        marginBottom: 5,
        marginLeft: 20,
        width: 250,
        borderWidth: 1,
        borderColor: 'black',
    },
    inputcosto: {
        textAlign: 'center',
        backgroundColor: '#7b90c6',
        padding: 15,
        marginRight: 150,
        borderRadius: 3,
        marginBottom: 5,
    },
    
    campoFin: {
        marginTop: 10,
        marginHorizontal: 30,
        marginBottom: 10,
        backgroundColor: '#0000',
        justifyContent: 'center'
    },
    labelfin: {
        textAlign: 'left',
        color: '#FFF',
        marginBottom: 10,
        marginTop: 20,
        marginLeft: 30,
        fontSize: 22,
        fontWeight: '600',
    },

    costoTotal: {
        backgroundColor: '#C6CCDC',
        width: 160,
        height: 50,
        borderWidth: 1,
        borderColor: '#000000'

    },
    pickerMaterial: {
        width: 250,
        backgroundColor: '#FFF',
    },
    pickerContainerCristal: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 10,
    },
    pickerContainerColor: {
        borderWidth: 1,
        borderColor: 'black',
        marginLeft: 20,
    },
    addButton: {
        padding: 20,
    },
    addButtonIcon: {
        width: 90,
        height: 90,
        marginRight: 20,
    },


});