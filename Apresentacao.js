// Apresentacao.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Apresentacao() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mais sobre Maria Luiza</Text>
      <Text style={styles.content}>
        Maria é apaixonada por tecnologia e está focada em aprender backend com Node.js e bancos de dados. 
        Ela está se dedicando para entrar no mercado de desenvolvimento e construir soluções eficientes.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  content: {
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 26,
  },
});
