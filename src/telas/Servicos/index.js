import React from 'react'

import { Text, FlatList } from 'react-native'

import Item from './Item'
import estilos from './Item/estilos'
import TelaPadrao from '../../componente/TelaPadrao'

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.9,
        descricao:"Realizamos a higiene completa do seu pet"
    },
    {
        id:2,
        nome:"Vacina V4",
        preco: 179.9,
        descricao:"Himunize seu pet de várias doenças"
    },
    {
        id:3,
        nome:"Vacina antirrábica",
        preco: 79.9,
        descricao:"Vacina contra raiva"
    },
    {
        id:4,
        nome:"Tosagem",
        preco: 50.0,
        descricao:"Tosa completa"
    }

] 

export default function Servicos(){
    return <TelaPadrao>
        <Text style = {[estilos.title,estilos.servicoTop]}>Serviços</Text>
        <FlatList
            data = {servicos}
            renderItem = {({item}) => <Item {...item} />} 
            keyExtractor = {(item) => String(item.id)}
        />
        </TelaPadrao>
}