import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ProyectosListScreen() {
  const navigation = useNavigation();

  //Cambiar Ruta de iconos
  //Logica de Buscar Proyecto, Filtros y Agregar Proyecto
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Menu')}>
          <Image source={require('../../icons/regresar.png')} style={styles.backButtonIcon } />
        </TouchableOpacity>
        <Text style={styles.title}>Proyectos</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput style={styles.input} placeholder="Buscar Proyecto" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../icons/filtro.png')} style={styles.filtroIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.clientList}>
        <View style={{justifyContent:"space-between", flexDirection:"row", marginHorizontal:30}}>
        <Text style={styles.clientItem}>Nombre</Text>
        <Text style={styles.clientItem}>Estado</Text>
        </View>
                {/* Aquí irá la lista de clientes */}
        {/* Puedes agregar más elementos de lista según sea necesario */}
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('Proyecto')}>
          <Image source={require('../../icons/add.png')} style={styles.addButtonIcon} />
        </TouchableOpacity>
      </View>
      <StatusBar style='auto' />
      </ScrollView>
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
    height:600
  },
  clientItem: {
    fontSize: 22,
    marginTop: 5,
    marginBottom: 20,
    color: '#FFFF',
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