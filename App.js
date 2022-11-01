//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Header } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Input
        placeholder='Email'
      />
      <Input
        placeholder='Senha'
      />
      <Button title='Login' onPress={() => navigation.navigate('ListaContatos')}></Button>
      <Button title='Cadastre-se' onPress={() => navigation.navigate('CadastroUsuario')}></Button>
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
      number: '97854625',
      avatar_url: '',
      name: 'Jeronimo'
    },
    {
      number: '9987456321',
      avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
      name: 'Guilherme'
    }
  ]
  
 
 
  return (
    <View style={{}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
        centerComponent={{ text: 'Lista de Contatos', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
      
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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="CadastroUsuario" component={CadastroDeUsuarioScreen} />
        <Stack.Screen name="ListaContatos" component={ListaDeContatosScreen} />
        <Stack.Screen name="CadastroContato" component={CadastroDeContatoScreen} />
        <Stack.Screen name="AlteracaoContato" component={AlteracaoDeContatoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;