import React from 'react';
import {View,Text} from 'react-native';

export default function Contacts({navigation}){
    return(
        <View style={{marginTop:40}}>
            <Text>Rafael</Text>
            <Text
                onPress={() => navigation.navigate('Information')}
            >Information...</Text>
        </View>
    );
}