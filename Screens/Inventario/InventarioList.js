import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, VirtualizedList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Material from './Material';
import ComponentMaterial from './ComponentInventario';

export default function InventarioListScreen() {
    const navigation = useNavigation();
    const [materiales, setMateriales] = useState([])
    const [material, setMaterial] = useState({})

    const [modalVisible, setModalVisible] = useState(false)

    const EditarMaterial = id => {
      const EditarMaterial = materiales.filter(material => material.id === id)
      setMaterial(EditarMaterial[0])
    }

  //Cambiar Ruta de iconos
  //Logica de Buscar Material, Filtros y Agregar Material
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../../icons/regresar.png')} style={styles.backButtonIcon} />
        </TouchableOpacity>
        <Text style={styles.title}>Inventario</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Buscar Material" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../icons/filtro.png')} style={styles.filtroIcon} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#C6CCDC', marginTop: 20, height: 500 }}>
    
     <View style={styles.containerlistado}>
      <FlatList style={styles.listado}
            data={materiales}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => {
              return (
                <ComponentMaterial
            item={item}
            setModalVisible={setModalVisible}
            EditarMaterial={EditarMaterial}
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
        <Material
          materiales={materiales}
          setMateriales={setMateriales}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}/>
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