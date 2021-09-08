import { StyleSheet } from 'react-native';
import { cores } from '../../estilos';

export default (pequeno, invertido) => StyleSheet.create({
  // buttonIconSeparatorStyle: {
  //   backgroundColor: '#fff',
  //   width: 1.5,
  //   height: 40,
  //   marginLeft:10
  // },
  buttonImageIconStyle: {
    padding: 10, 
    margin: 20, 
    height: 25,
    width: 25, 
    resizeMode: 'stretch', 
  },
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 140,
    height: 50,
    paddingVertical: pequeno ? 3 : 9,
    paddingHorizontal: 20,
    backgroundColor: invertido ? cores.laranja : cores.roxo,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  valor: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: invertido ? cores.roxo : cores.laranja,
  }
});