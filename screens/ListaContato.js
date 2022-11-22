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

function ListaDeContatosScreen({ navigation }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        async function resgatarDados() {
            const result = await axios(
                'http://professornilson.com/testeservico/clientes',
            )
            setData(result.data);
        }
        resgatarDados();
    })

    const keyExtractor = (item, index) => index.toString()

    const renderItem = ({ item }) => (
        <ListItem bottomDivider
            containerStyle={{ width: 396 }}
            onPress={() => navigation.navigate('Contato', { id: item.id, nome: item.nome, telefone: item.telefone, email: item.email })}
        >


        </ListItem>
    )




    return (
        <View>
            <Header
                centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff' } }}
                rightComponent={<Button
                    title="+"
                    onPress={() => navigation.navigate('CadastroContato')}
                ></Button>}
            />

            <FlatList
                keyExtractor={keyExtractor}
                data={data}
                renderItem={renderItem}
            />
        </View>
    );
}
export default ListaDeContatosScreen;