//import { StatusBar } from 'expo-status-bar';
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


// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Input
//         placeholder='Email'
//       />
//       <Input
//         placeholder='Senha'
//       />
//       <Button title='Login' onPress={() => navigation.navigate('ListaContatos')}></Button>
//       <Button title='Cadastre-se' onPress={() => navigation.navigate('CadastroUsuario')}></Button>
//     </View>
//   );
// }
// function CadastroDeUsuarioScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Input
//         placeholder='Nome'
//       />
//       <Input
//         placeholder='Cpf'
//       />
//       <Input
//         placeholder='Email'
//       />
//       <Input
//         placeholder='Senha'
//       />

//       <Button title='Salvar' onPress={() => navigation.navigate('HomeScreen')}></Button>
//     </View>
//   );
// }

// function ListaDeContatosScreen({ navigation }) {
 

//   const renderItem = ({ item }) => (
//     <ListItem bottomDivider
//         containerStyle={{ width: 396 }}
//         onPress={() => navigation.navigate('Contato', { id: item.id, nome: item.nome, telefone: item.telefone, email: item.email })}
//     >
        
        
//         </ListItem>
//     )

  
 
 
//   return (
//     <View>
//       <Header
//         centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff' } }}
//         rightComponent={ <Button  
//           title="+"
//           onPress={()=>navigation.navigate('CadastroContato')}
//           ></Button>}
// />
      
      
      
      

//     </View>
//   );
// }




// function CadastroDeContatoScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//        <Input
//         placeholder='Nome'
//       />
//       <Input
//         placeholder='Email'
//       />
//       <Input
//         placeholder='Telefone'
//       />
//       <Button title='Salvar' onPress={() => navigation.navigate('ListaContatos')}></Button>
//     </View>
//   );
// }
// function AlteracaoDeContatoScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Input
//         placeholder='Nome'
//       />
//       <Input
//         placeholder='Email'
//       />
//       <Input
//         placeholder='Telefone'
//       />

//       <Button title='Alterar' onPress={() => navigation.navigate('Cadastro')}></Button>
//       <Button title='Excluir' onPress={() => navigation.navigate('Cadastro')}></Button>

//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function consultarDados(){

//   axios.get('http://professornilson.com/testeservico/clientes')
  
//   .then(function (response) {
//   console.log(response);
//   }).catch(function (error) {
//   console.log(error);
  
//   });
  
//   }


//   function inserirDados(){

//     axios.post('http://professornilson.com/testeservico/clientes'
//     , {
    
//     nome: getNome,
//     telefone: getTelefone,
//     cpf: getCpf
//     }).then(function (response) {
//     console.log(response);
//     }).catch(function (error) {
//     console.log(error);
    
//     });
    
//     }

//   function alterarDados(){

//       axios.put('http://professornilson.com/testeservico/clientes/'+getId
//       ,
      
//       {
//       nome: getNome,
//       telefone: getTelefone,
//       cpf: getCpf
//       }).then(function (response) {
//       console.log(response);
//       }).catch(function (error) {
//       console.log(error);
      
//       });
      
//       }

//       function excluirDados(){

//         axios.delete('http://professornilson.com/testeservico/clientes/'+getId)
        
//         .then(function (response) {
//         console.log(response);
//         }).catch(function (error) {
//         console.log(error);
        
//         });
        
//         }



export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroDeUsuarioScreen} />
        <Stack.Screen name="ListaContatos" component={ListaDeContatosScreen} />
        <Stack.Screen name="CadastroContato" component={CadastroDeContatoScreen} />
        <Stack.Screen name="AlteracaoContato" component={AlteracaoDeContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

