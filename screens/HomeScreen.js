import { View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Header } from 'react-native-elements';
import React, { useEffect, useState } from "react";
import { FlatList } from 'react-native'
import axios from 'axios';

function HomeScreen({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const login = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                userCredential.user;
                navigation.navigate('Contatos')
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
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                value={email}
                keyboardType="email-address"
            />
            <Input
                placeholder='Senha'
                onChangeText={(text) => setSenha(text)}
                value={senha}
            />
            <Button title='Login' onPress={() => navigation.navigate('ListaContatos')}></Button>
            <Button title='Cadastre-se' onPress={() => navigation.navigate('CadastroUsuario')}></Button>
        </View>
    );
}
export default HomeScreen;