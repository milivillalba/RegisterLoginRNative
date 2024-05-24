import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default function ListaPokemon() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const fetchPokemonData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0');
      const data = await response.json();
      setPokemonList(data.results);
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.pokemonItem}>
      <Image
        source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getPokemonId(item.url)}.png` }}
        style={styles.pokemonImage}
      />
      <Text style={styles.pokemonName}>{item.name}</Text>
    </View>
  );

  const getPokemonId = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapper}
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
  pokemonItem: {
    backgroundColor: '#F6CEF5',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: 10,
    marginVertical: 8,
  },
  pokemonImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pokemonName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 12,
    textAlign: 'center',
    color: '#333',
  },
  columnWrapper: {
    justifyContent: 'space-around',
  },
});
