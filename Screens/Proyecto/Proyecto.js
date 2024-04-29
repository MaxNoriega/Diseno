import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, Modal, ScrollView, VirtualizedList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import Product from './Producto';
import ComponentProduct from './ComponentProducto';

//Verifiar componentes en el stylesheet

export default function ProyectoScreen() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false)
  const [productos, setProductos] = useState([])
  const [producto, setProducto] = useState({})
  const [costoTotal, setCostoTotal] = useState(0);

  // Calcular el costo total de todos los productos
  useEffect(() => {
    calcularCostoTotal();
  }, [productos]);

  const calcularCostoTotal = () => {
    let total = 0;
    productos.forEach(producto => {
      const costoTotal = parseFloat(producto.costoTotal); // Suponiendo que cada producto tiene una propiedad 'costo'
      if (!isNaN(costoTotal)) {
        total += costoTotal;
      }
    });
    setCostoTotal(total);
  };


  const productoEditar = id => {
    const productoEditar = productos.filter(producto => producto.id === id)
    setProducto(productoEditar[0])
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('ProyectosList')}>
          <Image source={require('../../icons/regresar.png')} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Proyecto</Text>
        <TouchableOpacity style={styles.btnSave}>
          <Text style={styles.txtBtnSave}>Guardar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerID}>
        <Text style={styles.txtID}>Identificador:</Text>
        <TextInput style={styles.inputID} />
      </View>
      <Text style={styles.txtNotas}>Notas:</Text>
      <View style={styles.containerNotas}>
        <TextInput style={styles.inptutNotas} multiline={true} />
      </View>
      <Text style={styles.txtProductos}>PRODUCTOS:</Text>
      
      <View style={styles.containerListado}>

        <VirtualizedList style={styles.listado}
          data={productos}
          getItemCount={() => productos.length}
          getItem={(data, index) => data[index]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ComponentProduct
              item={item}
              setModalVisible={setModalVisible}
              productoEditar={productoEditar}
            />
          )}
        />
      </View>

      <View style={styles.ContainerCostoTotal}>
        <Text style={styles.txtCostoTotal}>Costo Total:</Text>

        <View style={styles.ContainerADDbutton}>
          <View style={styles.ContainerCostTOT}>
            <Text style={styles.costoTotalTXT}>${costoTotal}</Text>
          </View>
          
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
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  addButtonIcon: {
    width: 120,
    height: 120,
  },
  backButtonIcon: {
    width: 40,
    height: 40,
    marginRight: 1,
  },

  btnSave: {
    backgroundColor: '#303D65', 
    marginTop: 10, 
    marginLeft: 50, 
    width: 100, 
    height: 45

  },
  txtBtnSave: {
    color: '#FFF', 
    textAlign: 'center', 
    padding: 10, 
    fontSize: 18, 
    borderWidth: 1
  },
  listado: {
    marginTop: 1,
    marginHorizontal: 1,

  },
  containerID: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20
  },
  txtID: {
    color: '#FFF', 
    marginRight: 10, 
    fontSize: 18

  },
  inputID: {
    flex: 1, 
    backgroundColor: '#FFFF'

  },
  txtNotas: {
    marginTop: 10, 
    marginBottom: 10, 
    color: '#FFFF', 
    fontSize: 20

  },
  containerNotas: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10, 
    backgroundColor: '#FFFF'

  },
  inptutNotas: {
     flex: 1, 
      height: 50,
    fontSize:18
  },
  txtProductos: {
    marginTop: 20, 
    textAlign: 'center', 
    fontSize: 20, 
    color: '#FFFF' 

  },
  containerListado: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    padding: 10, 
    backgroundColor: '#C6CCDC', 
    marginTop: 20, 
    height: 300

  },
  ContainerCostoTotal: {
    justifyContent: 'space-between'

  },
  txtCostoTotal:{
    color: '#FFF', 
    fontSize: 20, 
    marginLeft: 10, 
    marginTop: 10
  },
  costoTotalTXT:{
    marginTop:5,
    marginLeft:30,
    fontSize:26,
    fontWeight:'600',
},
  ContainerADDbutton:{
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    marginBottom: 10
  },
  ContainerCostTOT:{
    flexDirection: 'row', 
    marginBottom: 10,
    backgroundColor: '#C6CCDC', 
    height: 40, 
    width: 150, 
    marginTop: 5, 
    marginRight: 100
  }
});