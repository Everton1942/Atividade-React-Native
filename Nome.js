import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Nome({navigation}) {
    const verImagem = () => {
        navigation.navigate("Imagem");
    }
    return (
    <View style={styles.container}>
      <Text>Olá, meu chapa, seja bem-vindo!!</Text>
      <Text>Autor: Everton Henrique Lira Florentino</Text>
      <StatusBar style="auto" />
      <Button
        title='Visualizar imagem'
        onPress={() => verImagem()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
