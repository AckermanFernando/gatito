import React from 'react'

import {FlatList, Text, View } from 'react-native'

import Item from './Item'

import TelaPadrao from '../../componente/TelaPadrao'

import StatusCarrinho from '../../componente/StatusCarrinho'

// import Botao from '../../componente/Botao'
// import estilos from './Item/estilos'

const servicos = [
    {
        id:1,
        nome: "Banho",
        preco: 79.9,
        descricao:"Realizamos a higiene completa do seu pet",
        quantidade: 1
    },
    {
        id:2,
        nome:"Vacina V4",
        preco: 179.9,
        descricao:"Himunize seu pet de várias doenças",
        quantidade: 1
    },
    {
        id:3,
        nome:"Vacina antirrábica",
        preco: 79.9,
        descricao:"Vacina contra raiva",
        quantidade: 1
    },
    {
        id:4,
        nome:"Tosagem",
        preco: 50.0,
        descricao:"Tosa completa",
        quantidade: 2
    }

] 

export default function Carrinho(){
    const total = servicos.reduce((soma, { preco, quantidade}) => soma + preco * quantidade, 0)
    return <TelaPadrao>
        <StatusCarrinho total = { total }/>
        <FlatList
            data = {servicos}
            renderItem = {({item}) => <Item {...item} />} 
            keyExtractor = {(item) => String(item.id)}
        />
        </TelaPadrao>
}