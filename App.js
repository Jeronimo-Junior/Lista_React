import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



  function CadastroScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Login' onPress={()=>navigation.navigate('ListaContatos')}></Button>
      <Button title='Cadastro' onPress={()=>navigation.navigate('CadastroUsuario')}></Button>
      </View>
      );
      }
  function CadastroDeUsuarioScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Cadastro de Usuário Screen</Text>
    <Button title='Salvar' onPress={()=>navigation.navigate('Cadastro')}></Button>
    </View>
    );
    }
  function ListaDeContatosScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Header
      placement="left"
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
/>
    <Text>Lista de Contatos Screen</Text>
    </View>
    );
    }
  function CadastroDeContatoScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Cadastro de Contatos Screen</Text>
    </View>
    );
    }
  function AlteracaoDeContatoScreen({navigation}) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Alteração de Contatos Screen</Text>
    <Button title='Alterar' onPress={()=>navigation.navigate('Cadastro')}></Button>
    <Button title='Excluir' onPress={()=>navigation.navigate('Cadastro')}></Button>

    </View>
    );
    }
  
  const Stack = createNativeStackNavigator();
  
  function App() {
  return (
  <NavigationContainer>
  <Stack.Navigator>
  <Stack.Screen name="Cadastro" component={CadastroScreen} />
  <Stack.Screen name="CadastroUsuario" component={CadastroDeUsuarioScreen} />
  <Stack.Screen name="ListaContatos" component={ListaDeContatosScreen} />
  <Stack.Screen name="CadastroContato" component={CadastroDeContatoScreen} />
  <Stack.Screen name="AlteracaoContato" component={AlteracaoDeContatoScreen} />
  </Stack.Navigator>
  </NavigationContainer>
  );
  }
  
  export default App;