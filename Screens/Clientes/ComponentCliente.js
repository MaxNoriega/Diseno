<<<<<<< HEAD
import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native'


export default function ComponentCliente ({item, setModalVisible, EditarCliente, EliminarCliente}) {
    const { nomC, apellC, telC  ,id} = item

    const [mostrarMenu, setMostrarMenu] = useState(false);

    const handleOpcionesPress = () => {
      setMostrarMenu(true);
    };
  
    const handleEditarPress = () => {
      // Acción para editar
      setMostrarMenu(false);
    };
  
    
  return (
    <View style={styles.contenedor}>

      <View style={styles.contCliente}>
        <Text style={styles.textoCliente}>Cliente:    {nomC} {apellC}</Text>
        <Text style={styles.textoCel}>Teléfono: {telC}</Text>
      </View>

      <View style={styles.contenedorBotones}>
        <TouchableOpacity onPress={handleOpcionesPress} style={styles.opcionesButton}>
          <Text style={styles.opcionesButtonTxT}>...</Text>
        </TouchableOpacity>

        <Modal visible={mostrarMenu} transparent={true} animationType="fade">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={handleEditarPress} style={styles.menuItem}>
                <Text>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => EliminarCliente(item.id)} style={styles.menuItem}>
                <Text>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setMostrarMenu(false)} style={styles.menuItemCancelar}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
=======
import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function ComponentCliente ({item, setModalVisible, EditarCliente}) {
    const { nomC, id} = item
  return (
    <View >
        <Text>{nomC}</Text>

        <View style={styles.contenedorBotones}>
            <TouchableOpacity style={[styles.btn, styles.btnEditar]}
                              onLongPress={()=> {
                                setModalVisible(true)
                                EditarCliente(id)
                              }}
            >
                <Text style={styles.btnTexto}>Editar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.btnEliminar]}>
                <Text style={styles.btnTexto}>Eliminar</Text>
            </TouchableOpacity>
        </View>
>>>>>>> 01080581d6ace6368a594017836257b421479d56
    </View>
        
  )
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#FFF',
    padding:20,
    borderBottomColor:'#94A3B8',
<<<<<<< HEAD
    borderBottomWidth:1,
    flexDirection: 'row',
    justifyContent:'space-between'
=======
    borderBottomWidth:1
>>>>>>> 01080581d6ace6368a594017836257b421479d56
  },
  label:{
    color:'#374151',
    textTransform:'uppercase',
    fontWeight:'700',
    marginBottom:10
  },
<<<<<<< HEAD
  textoCliente: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  textoCel:{
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
    marginRight:20
=======
  texto:{
    color:'#6D28D9',
    fontSize:24,
    fontWeight:'700'
>>>>>>> 01080581d6ace6368a594017836257b421479d56
  },
  fecha:{
    color:'#374151'
  },
<<<<<<< HEAD
=======
  contenedorBotones:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:20
  },
  btn:{
    paddingVertical:5,
    paddingHorizontal:20,
    borderRadius:5
  },
>>>>>>> 01080581d6ace6368a594017836257b421479d56
  btnEditar:{
     backgroundColor:'#F59E0B'
  },
  btnEliminar:{
    backgroundColor:'#EF4444'
  },
  btnTexto:{
    textTransform:'uppercase',
    fontWeight:'700',
    fontSize:12,
    color:'#FFF'
<<<<<<< HEAD
  },
  contenedorBotones: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  opcionesButton: {
    width: 40,
    height: 40,
    padding: 1,
    backgroundColor: '#DDDDDD',
    borderRadius: 5,
  },
  opcionesButtonTxT:{
    textAlign:'center',
    fontSize:20

  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    elevation: 10,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  menuItemCancelar: {
    padding: 10,
    marginTop: 10,
  },
=======
  }
>>>>>>> 01080581d6ace6368a594017836257b421479d56



})