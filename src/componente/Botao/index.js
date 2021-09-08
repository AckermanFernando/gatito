import React from 'react'

import { TouchableOpacity, Text, Image, View } from 'react-native'

import funcaoEstilosPadrao from './estilos'

export default function Botao({pequeno = false, invertido = false, valor, acao, estilos}){
    const estilosPadrao = funcaoEstilosPadrao(pequeno, invertido)

    return <TouchableOpacity onPress={acao} style={[estilosPadrao.botao, estilos]}> 
    
        <Text style = {estilosPadrao.valor}>{valor}</Text>
        {/* <View style={estilosPadrao.buttonIconSeparatorStyle} /> */}
        <Image source={require('./../../../assets/iconcarr.png')} style={funcaoEstilosPadrao.buttonImageIconStyle}/> 
        
    </TouchableOpacity>
}