import React, { useState } from 'react';

import { View } from 'react-native';
import { Button, Text, Input } from 'react-native-elements'

import Icon  from 'react-native-vector-icons/FontAwesome';
import TelaPadrao from '../../componente/TelaPadrao';
import styles from './estilos';

export default function Login({navigation}) {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const entrar = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: "Principal"}]
    })
  }
  return (
    <TelaPadrao>
    <View style={styles.container}>
      <Text h1 style={styles.title}> Entre no Gatito </Text>
      <Input
        placeholder = "E-mail"
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#FABE50'}}
        onChangeText = {value => setEmail(value)}
        keyboardType = "email-address"
      />

      <Input
        placeholder = "Sua senha"
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#FABE50'}}
        onChangeText = {value => setPassword(value)}
        secureTextEntry={true}
      />

      <Button
        title= "Entrar"
        onPress = {() => entrar()}
      />
    </View>
    </TelaPadrao>
  )
}



