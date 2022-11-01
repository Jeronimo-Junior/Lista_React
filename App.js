import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem, Avatar } from 'react-native-elements'


function CadastroScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='Login' onPress={() => navigation.navigate('ListaContatos')}></Button>
      <Button title='Cadastro' onPress={() => navigation.navigate('CadastroUsuario')}></Button>
    </View>
  );
}
function CadastroDeUsuarioScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cadastro de Usuário Screen</Text>
      <Button title='Salvar' onPress={() => navigation.navigate('Cadastro')}></Button>
    </View>
  );
}


function ListaDeContatosScreen({ navigation }) {

  const list = [
    {
    name: 'Jeronimo Jr',
    avatar_url: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?s=612x612',
    number: '9987654321'
  },
    {
      name: 'Guilherme Lacerda',
    avatar_url: 'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?s=612x612',
    subtitle: '9912345678'
  },
    ]

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Lista de Contatos Screen</Text>
      

      <View>
        {
          list.map((l, i) => (
            <ListItem key={i} bottomDivider>
              <Avatar source={{ uri: l.avatar_url }} />
              <ListItem.Content>
                <ListItem.Title>{l.name}</ListItem.Title>
                <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </View>

    </View>
  );
}
function CadastroDeContatoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Cadastro de Contatos Screen</Text>
    </View>
  );
}
function AlteracaoDeContatoScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Alteração de Contatos Screen</Text>
      <Button title='Alterar' onPress={() => navigation.navigate('Cadastro')}></Button>
      <Button title='Excluir' onPress={() => navigation.navigate('Cadastro')}></Button>

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