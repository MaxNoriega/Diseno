import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native'

export default function ComponentProduct({ item, setModalVisible, productoEditar }) {
  const { ancho, alto, cristal, color, id } = item

  const [mostrarMenu, setMostrarMenu] = useState(false);

  const handleOpcionesPress = () => {
    setMostrarMenu(true);
  };

  const handleEditarPress = () => {
    // Acción para editar
    setMostrarMenu(false);
  };

  const handleEliminarPress = () => {
    // Acción para eliminar
    setMostrarMenu(false);
  };

  return (
    <View style={styles.contenedor}>

      <View>
        <Text style={styles.texto}>Ancho: {ancho} m</Text>
        <Text style={styles.texto}>Alto:     {alto} m</Text>
        <Text style={styles.texto}>Color: {color}</Text>
        <Text style={styles.texto}>Cristal: {cristal}</Text>
        

        
        
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
              <TouchableOpacity onPress={handleEliminarPress} style={styles.menuItem}>
                <Text>Eliminar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setMostrarMenu(false)} style={styles.menuItemCancelar}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    padding: 10,
    borderBottomColor: '#94A3B8',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  label: {
    color: '#374151',
    textTransform: 'uppercase',
    fontWeight: '700',
    marginBottom: 10
  },
  texto: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5
  },
  contenedorBotones: {
    marginTop: 35,
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



})
