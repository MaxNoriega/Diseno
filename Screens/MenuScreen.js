import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MenuScreen() {
  const navigation = useNavigation();



  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProyectosList')}>
        <View style={styles.buttonContent}>
          <Image source={require('../icons/proyecto.png')} style={styles.icon}/>
          <Text style={styles.buttonText}>Proyectos</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('InventarioList')}>
        <View style={styles.buttonContent}>
          <Image source={require('../icons/inventario.png')} style={styles.icon}/>
          <Text style={styles.buttonText}>Inventario</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ClientesList')}>
        <View style={styles.buttonContent}>
          <Image source={require('../icons/clientes.png')} style={styles.icon}/>
          <Text style={styles.buttonText}>Clientes</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7A88AF',
  },
  button: {
    width: 170,
    height: 170,
    backgroundColor: '#8D99BA',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    marginTop:5,
    textAlign: 'center',
  },

  icon: {
    width: 110,
    height: 110,
  },
});

