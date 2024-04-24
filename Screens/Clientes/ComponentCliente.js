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
    </View>
        
  )
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#FFF',
    padding:20,
    borderBottomColor:'#94A3B8',
    borderBottomWidth:1
  },
  label:{
    color:'#374151',
    textTransform:'uppercase',
    fontWeight:'700',
    marginBottom:10
  },
  texto:{
    color:'#6D28D9',
    fontSize:24,
    fontWeight:'700'
  },
  fecha:{
    color:'#374151'
  },
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
  }



})