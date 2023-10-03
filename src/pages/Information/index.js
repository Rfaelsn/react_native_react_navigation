import React from 'react';
import {View,Text} from 'react-native';

export default function Contacts({ route }){
    return(
        <View style={{marginTop:40}}>
            <Text>Nome: {route.params?.nome}</Text>
            <Text>Telefone: {route.params?.telefone}</Text>
            <Text>Endereco: {route.params?.endereco}</Text>
            <Text>nº: {route.params?.numero}</Text>
            <Text>;Profissao: {route.params?.profissao}</Text>
            <Text>Email: {route.params?.email}</Text>
        </View>
    );
}