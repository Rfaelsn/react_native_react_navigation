import React from 'react';
import {View,Text} from 'react-native';

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:40}}>
            <View>
                <Text>Nome: Rafael Nascimento</Text>
                <Text>Telefone: (91) 98763-4455</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Rafael Silva do Nascimento',
                        telefone: '(91) 98763-4455',
                        endereco:'rua do fluna prox ao ciclano',
                        numero:'710',
                        profissao: 'Analista',
                        email: 'rafael@email.com',
                    })}
                >Information...</Text>
            </View>
            <View style={{marginTop:40}}>
                <Text>Nome: Joao Silva</Text>
                <Text>Telefone: (91) 98733-4485</Text>
                <Text
                    onPress={() => navigation.navigate('Information',
                    {
                        nome: 'Joao da Silva Campos',
                        telefone: '(91) 98763-3486',
                        endereco:'rua do fluna prox ao ciclano',
                        numero:'645',
                        profissao: 'Analista',
                        email: 'joao@email.com',
                    })}
                >Information...</Text>
            </View>
        </View>
    );
}