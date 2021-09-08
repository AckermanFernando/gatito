import React, { useState } from 'react'
import {Text, TouchableOpacity, View, Image} from 'react-native'
import Botao from '../../../componente/Botao'
import CampoInteiro from '../../../componente/CampoInteiro'
import estilos from './estilos'


export default function Item({nome, preco, descricao}){
    const [quantidade, setQuantidade] = useState(0)
    const [total, setTotal] = useState(0)
    const [expandir, setExpandir] = useState(false)

    const inverteExpandir = () => {
        setExpandir(!expandir)
        atualizaQuantidadeTotal(0)
    }

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade)
        calculaTotal(novaQuantidade)
    }
    
    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco)
    }
    return <>
    <TouchableOpacity style = {estilos.info} onPress = {inverteExpandir}>
        <Text style = {estilos.nome}> {nome}</Text>
        <Text style = {estilos.descricao}> {descricao}</Text>
        <Text style = {estilos.preco}> {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(preco)}</Text>
    </TouchableOpacity>
    {expandir &&
    <View style = {estilos.carrinho}>
        <View>
            <View style = {estilos.valor}>
                <Text style = {estilos.descricao}>Quantidade: </Text>
                <CampoInteiro valor = {quantidade} acao = {atualizaQuantidadeTotal}/>
            </View>
            <View style = {estilos.valor}>
                <Text style = {estilos.descricao}>Total: </Text>
                <Text style = {estilos.preco}>{Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(total)}</Text>
            </View>
        </View>
        <Botao valor = 'Adicionar' acao = {() => {}} />
    </View>
    }
    <View style = {estilos.divisor}/>
    </>
}