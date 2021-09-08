import { StyleSheet } from "react-native";
import { cores } from '../../../estilos'

export default StyleSheet.create({
    
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: cores.roxo,
        textAlign: 'center'
    },
    nome: {
        color: cores.laranja,
        fontWeight: 'bold',
        fontSize: 16
    },
    info: {
        padding: 24
    },
    calculo: {
        color: cores.escuro,
        fontSize: 14,
        marginVertical: 8
    },
    preco: {
        color: cores.roxo,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'right'
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: cores.cinza
    },
    carrinho:{
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    valor: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap'
    },
    descricao: {
        color: cores.escuro,
        fontSize: 16,
        marginRight: 8
    },
    quantidade:{
        width: 42,
    }
})