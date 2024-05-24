import { Link } from 'expo-router';
import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

export default function indexScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/Pokebola.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.headerText}>Inicio de la Aplicación</Text>
      </View>
      <Link href="ListaPokemon" style={styles.linkContainer}>
        <View style={styles.link}>
          <Image
            source={require('../assets/images/Pokebola.png')}
            style={styles.linkIcon}
            resizeMode="contain"
          />
          <Text style={styles.linkText}>Ir a Lista de Pokemones</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FE2E9A',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 200,
    height: 80,
  },
  headerText: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 24,
    color: '#333',
  },
  linkContainer: {
    width: '100%',
  },
  link: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#F6CEF5',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  linkIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  linkText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  },
});