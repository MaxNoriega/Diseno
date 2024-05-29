import React, {useState} from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Modal } from 'react-native'

export default function ComponentMaterial ({item, setModalVisible, EditarMaterial}) {
    const { nomM,cantM, tipo, color, precio,  id} = item
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
          <Text style={styles.texto}>Nombre:   {nomM} </Text>
          <Text style={styles.texto}>Cantidad: {cantM} </Text>
          <Text style={styles.texto}>Precio:      {precio}</Text>
        </View>
  
        <View>
          <Text style={styles.texto}>Tipo:     {tipo}</Text>
          <Text></Text>
          <Text style={styles.texto}>Color:    {color}</Text>
          
        </View>
  
        <View style={styles.contenedorBotones}>
          <TouchableOpacity onPress={handleOpcionesPress} style={styles.opcionesButton}>
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
      fontSize: 18,
      fontWeight: '500',
      marginTop: 10
    },
    contenedorBotones: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    opcionesButton: {
      width: 40,
      height: 75,
      padding: 1,
      backgroundColor: '#DDDDDD',
      borderRadius: 5,
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