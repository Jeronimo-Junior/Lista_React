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

function AlteracaoDeContatoScreen({ navigation }) {

    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [telefone, setTelefone] = useState();

    async function AlteracaoDeContatoScreen() {
        await axios.put("http://professornilson.com/testeservico/clientes/" + id, {
            nome: nome,
            email: email,
            telefone: telefone
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }

    function excluirDados() {

        axios.delete("http://professornilson.com/testeservico/clientes/" + id)
            .then(function (response) {
                console.log(response);
                navigation.navigate('Contatos')
            }).catch(function (error) {
                console.log(error);
            });

    }

    useEffect(() => {
        if (route.params) {
            const { id } = route.params;
            const { nome } = route.params;
            const { email } = route.params;
            const { telefone } = route.params;

            setNome(nome);
            setId(id);
            setEmail(email);
            setTelefone(telefone);
        }
    }, []);

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
                nChangeText={(text) => setTelefone(text)}
                value={telefone}
                keyboardType="phone-pad"
                maxLength={15}
            />

            <Button title='Alterar' onPress={() => navigation.navigate('Cadastro')}></Button>
            <Button title='Excluir' onPress={() => navigation.navigate('Cadastro')}></Button>

        </View>
    );
}
export default AlteracaoDeContatoScreen;