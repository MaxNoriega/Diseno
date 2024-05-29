import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Product({ modalVisible, setModalVisible, productos, setProductos }) {
    const [ancho, setAncho] = useState('');
    const [alto, setAlto] = useState('');
    const [cristal, setCristal] = useState('');
    const [color, setColor] = useState('');
    const [mdo, setMDO] = useState('');
    const [costoTotal, setCostoTotal] = useState(0);

    

    const calcularCostoTotal = () => {
        // Convertir las cadenas de ancho y alto a valores numéricos
        const anchoNum = parseFloat(ancho.replace(',', '.'));
        const altoNum = parseFloat(alto.replace(',', '.'));

        // Paso 1: Calcular el contorno de la ventana
        const contorno = (anchoNum + altoNum) * 2;

        // Paso 2: Calcular el costo del marco de la ventana
        const costoMarco = contorno * 100; // Precio del metro de aluminio

        // Paso 3: Calcular el área del cristal
        const areaCristal = anchoNum * altoNum;

        // Paso 4: Calcular el costo del cristal
        const costoCristal = areaCristal * parseInt(cristal); // Precio del cristal por metro cuadrado

        // Paso 5: Calcular el costo total sin tener en cuenta el MDO
        const costoTotalSinMDO = costoMarco + costoCristal;

        // Paso 6: Calcular el porcentaje de MDO como un valor decimal
        const mdoDecimal = parseFloat(mdo) / 100;

        // Paso 7: Calcular el costo de la mano de obra
        const costoMDO = costoTotalSinMDO * mdoDecimal;

        // Paso 8: Calcular el costo total sumando el costo del marco, el costo del cristal y el costo de la mano de obra
        const costoTotalConMDO = costoTotalSinMDO + costoMDO;

        // Paso 9: Actualizar el estado con el costo total incluyendo el MDO
        setCostoTotal(costoTotalConMDO);
    };

    useEffect(() => {
        calcularCostoTotal();
    }, [ancho, alto, cristal,mdo]);

    useEffect(() => {
        const loadProductos = async () => {
          try {
            const savedProductos = await AsyncStorage.getItem('productos');
            if (savedProductos !== null) {
              setProductos(JSON.parse(savedProductos));
            }
          } catch (error) {
            console.log('Error loading productos from AsyncStorage', error);
          }
        };
    
        loadProductos();
      }, []);
    const handleNext = async  () => {
        if ([ancho, alto, cristal, color, mdo].includes('')) {
          Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
          );
          return;
        }
        const newProductos = {
          id: Date.now(),
          ancho,
          alto,
          cristal,
          color,
          mdo,
          costoTotal: costoTotal.toString(), // Convertir a cadena para que se muestre correctamente en el Text
        };
        console.log([...productos, newProductos])
        const updatedProductos = ([...productos, newProductos]);

        try {
            await AsyncStorage.setItem('productos', JSON.stringify(updatedProductos));
            setProductos(updatedProductos);
          } catch (error) {
            console.log('Error saving productos to AsyncStorage', error);
          }
        
        setAncho('');
        setAlto('');
        setCristal('');
        setColor('');
        setMDO('');
    };

    const handleSave = async () => {
        if ([ancho, alto, cristal, color, mdo].includes('')) {
          Alert.alert(
            'Error',
            'Todos los campos son obligatorios',
          );
          return;
        }
        const newProductos = {
          id: Date.now(),
          ancho,
          alto,
          cristal,
          color,
          mdo,
          costoTotal: costoTotal.toString(), // Convertir a cadena para que se muestre correctamente en el Text
        };
        console.log([...productos, newProductos])
        const updatedProductos = ([...productos, newProductos]);

        try {
            await AsyncStorage.setItem('productos', JSON.stringify(updatedProductos));
            setProductos(updatedProductos);
          } catch (error) {
            console.log('Error saving productos to AsyncStorage', error);
          }
      
          setAncho('');
          setAlto('');
          setCristal('');
          setColor('');
          setMDO('');
        
    

        setModalVisible(!modalVisible);

        setAncho('');
        setAlto('');
        setCristal('');
        setColor('');
        setMDO('');
    };


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
                                <Picker.Item label="Ninguno" value="Ninguno" />
                                <Picker.Item label="CRISTAL LAMINADO 3MM + 3MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 3MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 4MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 5MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 6MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 9.5MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 12MM" value="100" />
                                <Picker.Item label="CRISTAL CLARO 15MM" value="100" />
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
                                <Picker.Item label="........" value="" />
                                <Picker.Item label="ANONIZADO CHAMPAGNE" value="Anonizado Champagne" />
                                <Picker.Item label="ANONIZADO NATURAL MATE" value="Anonizado Natural Mate" />
                                <Picker.Item label="CHOCOLATE" value="Chocolate" />
                                <Picker.Item label="ESMALTADO BLANCO O BEIGE" value="Esmaltado Blanco" />
                                <Picker.Item label="GRIS EUROPA" value="Gris Europa" />
                                <Picker.Item label="NEGRO" value="Negro" />
                                <Picker.Item label="SIN ANODIZAR / NORMAL" value="Sin Anodizar/ Normal" />
                                <Picker.Item label="SUBLIMADO MADERA" value="Sublimado Madero" />
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
                        <View style={styles.costoTotal}>
                                <Text style={styles.costoTotalTXT}>${isNaN(costoTotal) ? 0 : costoTotal.toFixed(0)}</Text>
                        </View>
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
    costoTotalTXT:{
        textAlign:'center',
        marginTop:5,
        fontSize:26,
        fontWeight:'600',
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
        width: 120,
        height: 120,
        marginRight: 20,
        marginBottom:20
    },


});