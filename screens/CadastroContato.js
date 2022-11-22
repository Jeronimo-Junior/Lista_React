import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'
import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native'
import axios from 'axios';


function CadastroDeContatoScreen({ navigation }) {

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    async function inserirDados() {
        await axios.post('http://professornilson.com/testeservico/clientes', {
            nome: nome,
            telefone: telefone,
            email: email
        }).then(function (response) {
            console.log(response);
            navigation.navigate('Contatos')
        }).catch(function (error) {
            console.log(error);

        });

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Input
                placeholder='Nome'
                onChangeText={(text) => setNome(text)}
                value={nome}
            />
            <Input
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />
            <Input
                placeholder='Telefone'
                onChangeText={(text) => setTelefone(text)}
                value={telefone}
                keyboardType="phone-pad"
                maxLength={15}
            />
            <Button title='Salvar' onPress={() => navigation.navigate('ListaContatos')}></Button>
        </View>
    );
}
export default CadastroDeContatoScreen;