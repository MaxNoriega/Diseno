import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, ScrollView, Image,TouchableOpacity, Modal} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Material ({ modalVisible, setModalVisible, materiales, setMateriales }){
 
  const [nomM,setNomM]= useState('')
  const [cantM,setCantM]= useState('')
  const [tipo,setTipo]= useState('')
  const [color,setColor]= useState('')
  const [precio,setPrecio]=useState('')

  const handleNext = () => {
    if ([nomM, cantM, tipo, color, precio].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      )
      return
    }
    const newMateriales = {
      id: Date.now(),
      nomM,
      cantM,
      tipo,
      color,
      precio,
    }
    console.log([...materiales, newMateriales])
    setMateriales([...materiales, newMateriales]);
    
    setNomM('')
    setCantM('')
    setTipo('')
    setColor('')
    setPrecio('')
  }

  const handleSave = () => {
    if ([nomM, cantM, tipo, color, precio].includes('')) {
      Alert.alert(
        'Error',
        'Todos los campos son obligatorios',
      )
      return
    }
    const newMateriales = {
      id: Date.now(),
      nomM,
      cantM,
      tipo,
      color,
      precio,
    }
    console.log([...materiales, newMateriales])
    setMateriales([...materiales, newMateriales]);
    setModalVisible(!modalVisible)
    
    setNomM('')
    setCantM('')
    setTipo('')
    setColor('')
    setPrecio('')
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
        <Image source={require('../../icons/regresar.png')} style={styles.btncancelarIcon}/>
      </TouchableOpacity>
      <Text style={styles.titulo}> Material </Text>
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
           placeholder='Nombre del Material'
           placeholderTextColor={'#000000'}
           value={nomM}
           onChangeText={setNomM}
        />
        </View>

        <View style={styles.campInput}>
        <Text style={styles.label}>Cantidad:</Text>
        <TextInput
           style={styles.input}
           placeholder='Cantidad de Material'
           placeholderTextColor={'#000000'}
           keyboardType='number-pad'
           value={cantM}
           onChangeText={setCantM}
        />
      </View>
         
      <View>
      <Text style={styles.subTitulo}> Material </Text>
    </View>

      <View style={styles.campInput}>
        <Text style={styles.label}>Tipo:           </Text>
        <View style={styles.pickerContainerCristal}>
        <Picker
        selectedValue={tipo}
        style={styles.pickerMaterial} 
        onValueChange={(itemValue, itemIndex) =>
          setTipo(itemValue)
        }>
        <Picker.Item label="Ninguno" value="Niguno" />
<<<<<<< HEAD
        <Picker.Item label="Cristal" value="Cristal" />
        <Picker.Item label="Herraje" value="Herraje" />
=======
        <Picker.Item label="Madera" value="Madera" />
        <Picker.Item label="Acero" value="Acero" />
        <Picker.Item label="Ladrillo" value="Ladrillo" />
>>>>>>> 01080581d6ace6368a594017836257b421479d56
      </Picker>
      </View>
        </View>

        <View style={styles.campInput}>
        <Text style={styles.label}>Color:       </Text>
        <View style={styles.pickerContainerColor}>
        <Picker
        selectedValue={color}
        style={styles.pickerMaterial} 
        onValueChange={(itemValue, itemIndex) =>
          setColor(itemValue)
        }>
        <Picker.Item label="Ninguno" value="Ninguno" />
        <Picker.Item label="Madera" value="Madera" />
        <Picker.Item label="Acero" value="Acero" />
        <Picker.Item label="Ladrillo" value="Ladrillo" />
      </Picker>
      </View>
        </View>

      <View style={styles.campInput}>
        <Text style={styles.label}>Precio:     </Text>
        <TextInput
           style={styles.input}
           placeholder='Precio del Material'
           placeholderTextColor={'#000000'}
           keyboardType='number-pad'
           value={precio}
           onChangeText={setPrecio}
        />
      </View>

<<<<<<< HEAD
       <View style={{alignItems:'flex-end', marginTop:50}}>
=======
       <View style={{alignItems:'flex-end', marginTop:150}}>
>>>>>>> 01080581d6ace6368a594017836257b421479d56
      <TouchableOpacity onPress={handleNext}>
        <Image source={require('../../icons/add.png')} style={styles.addButtonIcon}/>
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
    backgroundColor:'#7A88AF',
 },
 header: {
  flexDirection: 'row',
  justifyContent:'space-between',
  backgroundColor:'#42558D',
  padding:5,

},
  titulo: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFF',
    marginLeft:20,
    marginTop:10
  },
  btncancelar:{
    marginTop:5,
    borderColor: 	'#000000',
  },
  btncancelarIcon:{
    width:50,
    height:50,
    marginVertical:5
  },
  btnGuardar:{
    backgroundColor: '#303D65',
    padding: 10,
    borderColor: 	'#000000',
    borderWidth:1,
    marginLeft:40,
    height:40,
    marginTop:15
    
  },
  btnGuardarTexto:{
    color:'#FFF',
    textAlign:'center',
    fontWeight:'600',
    fontSize: 16,
    textTransform:'uppercase',
  }, 
  subTitulo:{
   textAlign:'center',
   fontSize:22,
   fontWeight:'600',
   color:'#FFF',
   marginTop:10
  },
  campInput:{
    flexDirection:'row',
    marginTop:30,
    marginLeft:20

  },
  label:{
   textAlign: 'center',
   color: '#FFF',
   marginBottom: 10,
   marginTop: 15,
   fontSize: 20,
   fontWeight: '600',
  },
  input:{
   backgroundColor:'#FFF',
   padding: 15,
   borderRadius: 3,
   marginBottom: 5,
   marginLeft:20,
   width:250,
   borderWidth: 1,
   borderColor: 'black',
  },
   inputcosto:{
    textAlign: 'center',
   backgroundColor:'#7b90c6',
   padding: 15,
   marginRight: 150,
   borderRadius: 3,
   marginBottom: 5,
  
  },  
  campoFin:{
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
    backgroundColor:'#0000',
    justifyContent:'center'
  },
  labelfin:{
    textAlign: 'left',
  color: '#FFF',
  marginBottom: 10,
  marginTop: 20,
  marginLeft: 30,
  fontSize: 22,
  fontWeight: '600',
 },

  costoTotal:{
    backgroundColor:'#C6CCDC',
    width:160,
    height:50,
    borderWidth:1,
    borderColor:'#000000'

  },
  pickerMaterial:{
    width:250,
    backgroundColor:'#FFF',
  },
  pickerContainerCristal:{
    borderWidth: 1,
    borderColor: 'black',
    marginLeft:10,
  },
  pickerContainerColor:{
    borderWidth: 1,
    borderColor: 'black',
    marginLeft:20,
  },
  addButton: {
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderRadius: 5,

  },
  addButtonIcon: {
<<<<<<< HEAD
    width: 120,
    height: 120,
=======
    width: 90,
    height: 90,
>>>>>>> 01080581d6ace6368a594017836257b421479d56
    marginRight:20,
  },

 
});