import React, { useState } from 'react'
import {Text, View} from 'react-native'
import Botao from '../../../componente/Botao'
import CampoInteiro from '../../../componente/CampoInteiro'
import estilos from './estilos'


export default function Item({nome, preco, descricao, quantidade : quantidadeInicial}){
    const [quantidade, setQuantidade] = useState(quantidadeInicial)
    const [total, setTotal] = useState(preco * quantidadeInicial)

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade)
        calculaTotal(novaQuantidade)
    }
    
    const calculaTotal = (novaQuantidade) => {
        setTotal(novaQuantidade * preco)
    }
    return <>
    <View style = {estilos.info} >
        <Text style = {estilos.nome}> {nome}</Text>
        <Text style = {estilos.descricao}> {descricao}</Text>
        <Text style = {estilos.preco}> {Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(preco)}</Text>
    </View>
   
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
        <Botao valor = 'Remover' acao = {() => {}} />
    </View>
    <View style = {estilos.divisor}/>
    </>
}