import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apresentacao from './Apresentacao';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/minhaFoto1.jpg')}
          style={styles.image}
        />
      </View>

      <Text style={styles.title}>Maria Luiza</Text>

      <Text style={styles.description}>
        Idade: 20 anos{"\n"}
        Sou uma nova desenvolvedora em busca de conhecimento e ingressar na área de backend.
      </Text>

      {/* Botão customizado com TouchableOpacity */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Apresentacao')}
      >
        <Text style={styles.buttonText}>Leia mais</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Apresentacao" component={Apresentacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold'
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    lineHeight: 24,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  // Estilos para o botão customizado
  button: {
    backgroundColor: '#007BFF', // cor de fundo azul
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff', // cor do texto
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});