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
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function CadastroDeUsuarioScreen({ navigation }) {

    const [nome, setNome] = useState();
    const [cpf, setCpf] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth();

    const CadastroDeContatoScreen = () => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then(userCredential => {
                alert('Conta criada!')
                userCredential.user;
                navigation.navigate('Home')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
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
                placeholder='Cpf'
                onChangeText={(text) => setCpf(text)}
                value={cpf}
                keyboardType="numeric"
                maxLength={11}
            />
            <Input
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
            />
            <Input
                placeholder='Senha'
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />

            <Button title='Salvar' onPress={() => navigation.navigate('HomeScreen')}></Button>
        </View>
    );
}
export default CadastroDeUsuarioScreen;