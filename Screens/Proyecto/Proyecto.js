import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, Modal, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Product from './Producto';
import ComponentProduct from './ComponentProducto';

//Verifiar componentes en el stylesheet

export default function ProyectoScreen() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false)
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})

  const productoEditar = id => {
    const productoEditar = productos.filter(producto => producto.id === id)
    setProducto(productoEditar[0])
  }


  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProyectosList')}>
          <Image source={require('../../icons/regresar.png')} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Proyecto</Text>
        <TouchableOpacity style={{ backgroundColor: '#303D65', marginTop: 10, marginLeft: 50, width: 100, height: 45 }}>
          <Text style={{ color: '#FFF', textAlign: 'center', padding: 10, fontSize: 18, borderWidth: 1 }}>Guardar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <Text style={{ color: '#FFF', marginRight: 10, fontSize: 18, }}>Identificador:</Text>
        <TextInput style={{ flex: 1, backgroundColor: '#FFFF' }} />
      </View>
      <Text style={{ marginTop: 10, marginBottom: 10, color: '#FFFF', fontSize: 20 }}>Notas:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#FFFF' }}>
        <TextInput style={{ flex: 1, height: 150 }} multiline={true} />
      </View>
      <Text style={{ marginTop: 20, textAlign: 'center', fontSize: 20, color: '#FFFF' }}>PRODUCTOS:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#C6CCDC', marginTop: 20, height: 300 }}>
      <FlatList style={styles.listado}
            data={productos}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ComponentProduct
            item={item}
            setModalVisible={setModalVisible}
            productoEditar={productoEditar}
            />
              )
            }}

          />
      </View>

      <View style={{ justifyContent: 'space-between' }}>
        <Text style={{ color: '#FFF', fontSize: 20, marginLeft: 10, marginTop: 10 }}>Costo Total:</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginBottom: 10 }}>
          <View style={{ backgroundColor: '#C6CCDC', height: 40, width: 200, marginTop: 5, marginRight: 100 }} />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image source={require('../../icons/add.png')} style={styles.addButtonIcon} />
          </TouchableOpacity>


           

          <Product
                  productos={productos}
                  setProductos={setProductos}
                  modalVisible={modalVisible}
                  setModalVisible={setModalVisible} />




        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42558D',
    paddingHorizontal: 10,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  backButton: {
    marginRight: 20,
  },
  backButtonIcon: {
    width: 40,
    height: 40,
    marginRight: 1,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFF',
    textAlign: 'left',
    marginLeft: 50
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#E2E3E8',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  addButton: {
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonIcon: {
    width: 90,
    height: 90,
  },
  backButtonIcon: {
    width: 40,
    height: 40,
    marginRight: 1,
  },
  NoPacientes:{
    marginTop:40,
    textAlign:'center',
    fontSize:24,
    fontWeight:'700'
  },

  listado:{
  marginTop:50,
  marginHorizontal:30,

  },
});