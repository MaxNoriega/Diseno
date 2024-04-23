import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MenuScreen from './Screens/MenuScreen';
import ProyectosListScreen from './Screens/Proyecto/ProyectosLista';
import InventarioListScreen from './Screens/Inventario/InventarioList';
import ClientesListScreen from './Screens/Clientes/ClienteList';
import ProyectoScreen from './Screens/Proyecto/Proyecto';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="ProyectosList" component={ProyectosListScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="InventarioList" component={InventarioListScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="ClientesList" component={ClientesListScreen} 
        options={{headerShown:false}}/>
        <Stack.Screen name="Proyecto" component={ProyectoScreen} 
        options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;





