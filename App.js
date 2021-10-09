import React, { useState } from 'react';

import 'intl'
import 'intl/locale-data/jsonp/pt-BR'

import Servicos from './src/telas/Servicos'
import Carrinho from './src/telas/carrinho/index'
import Login from './src/telas/login';
import Principal from './src/telas/principal';

import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import { Text, View } from 'react-native';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function HomeScreen(){
  return (
    <View>
      <Text>
        Hi i'm your HomeS
      </Text>
    </View>
  )
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen tabBarShowLabel = "false" name="Serviços" component={Servicos} />
      <Tab.Screen name="Carrinho" component={Carrinho} />
    </Tab.Navigator>
  );
}



function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Principal" component={Principal} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      {/* <MyTabs/> */}
      <MyStack/>
    </NavigationContainer>
  )
}

// export default function App() {
//   // return <Servicos/>
//   return <Carrinho/>
// }



// function DiscoveryScreen(){
//   return (
//     <View>
//       <Text>
//         Hi i'm your DiscoveryScreen
//       </Text>
//     </View>
//   )
// }



// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home screen" component={HomeScreen} />
//       <Tab.Screen name="Dicovery Screen" component={DiscoveryScreen} />
//     </Tab.Navigator>
//   );
// }