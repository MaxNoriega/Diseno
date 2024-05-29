import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Cliente from './Cliente';
import ComponentCliente from './ComponentCliente';

export default function ClientesListScreen() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false)
  const [clientes, setClientes] = useState([])
  const [cliente, setCliente] = useState({})
  
  useEffect(() => {
    const loadclientes = async () => {
      try {
        const savedClientes = await AsyncStorage.getItem('clientes');
        if (savedClientes !== null) {
          setClientes(JSON.parse(savedClientes));
        }
      } catch (error) {
        console.log('Error loading productos from AsyncStorage', error);
      }
    };

    loadclientes();
  }, []);


  const EditarCliente = id => {
    const EditarCliente = clientes.filter(cliente => cliente.id === id)
    setCliente(EditarCliente[0])
  }

  const EliminarCliente = async (id) => {
    try {
      const savedClientes = await AsyncStorage.getItem('clientes');
      let productosArray = JSON.parse(savedClientes) || [];
      const updatedClientes = productosArray.filter(clientes => clientes.id !== id);
      await AsyncStorage.setItem('clientes', JSON.stringify(updatedClientes));
      setClientes(updatedClientes);
    } catch (error) {
      console.log('Error deleting clientes from AsyncStorage', error);
    }
  };
  //Cambiar Ruta de iconos
  //Logica de Buscar Cliente, Filtros y Agregar Clientes
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../../icons/regresar.png')} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Clientes</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Buscar clientes" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../icons/filtro.png')} style={styles.filtroIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.clientList}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#C6CCDC', marginTop: 20, height: 300 }}>
          <FlatList style={styles.listado}
            data={clientes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ComponentCliente
                  item={item}
                  setModalVisible={setModalVisible}
                  EditarCliente={EditarCliente}
                  EliminarCliente={EliminarCliente}
                />
              )
            }}

          />
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Image source={require('../../icons/add.png')} style={styles.addButtonIcon} />
        </TouchableOpacity>
        <Cliente
          clientes={clientes}
          setClientes={setClientes}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible} />
      </View>
      <StatusBar style='auto' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#42558D',
    paddingHorizontal: 10,
    paddingTop: 20,
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
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,

  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    backgroundColor: '#E2E3E8',
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  filterButton: {
    marginLeft: 5,
    backgroundColor: '#E2E3E8',
    paddingVertical: 10,
    paddingHorizontal: 10,
    width: 40,
    height: 37,
  },
  clientList: {
    backgroundColor: '#C6CCDC',
    flex: 1,
  },
  clientItem: {
    fontSize: 22,
    marginTop: 5,
    marginBottom: 20,
    color: '#FFFF',
    marginLeft: 40
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 1,
  },
  addButton: {
    paddingVertical: 1,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center'
  },
  addButtonIcon: {
    width: 90,
    height: 90,
  },
  //Falta Ajustar Boton
  filtroIcon: {
    width: 35,
    height: 35,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});