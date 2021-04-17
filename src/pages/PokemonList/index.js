import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const Item = ({name, imageUrl, onPress}) => {
  return (
    <TouchableOpacity style={styles.cardContent} onPress={onPress}>
      <View style={styles.sectionContent}>
        <Image
          source={{uri: imageUrl}}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <Text style={styles.textName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const PokemonList = ({navigation}) => {
  const [pokemon, setPokemon] = useState([]);
  const getDataPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20').then((res) => {
      console.log('data pokemon: ', res.data.results);
      setPokemon(res.data.results);
    });
    console.log('state resultPokemon: ', pokemon);
  };

  const renderItem = ({item}) => {
    const name = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    const pokemonIndex =
      item.url.substr(34, 2) >= 10
        ? item.url.substr(34, 2)
        : item.url.substr(34, 1);
    console.log('isi pokemonIndex: ', pokemonIndex);
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;
    return (
      <>
        <Item
          key={pokemonIndex}
          name={name}
          imageUrl={imageUrl}
          onPress={() =>
            navigation.navigate('PokemonDetail', {
              id: pokemonIndex,
              image: imageUrl,
            })
          }
        />
        <View style={{height: 100}} />
      </>
    );
    // // pokemon.map((item) => {
    //   // console.log('ini item render: ', item);
    // });
  };

  useEffect(() => {
    getDataPokemon();
  }, []);

  return (
    <View style={styles.wrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.pokeDex}>PokeDex</Text>
          <FlatList
            numColumns={2}
            data={pokemon}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item}
            style={{marginTop: 20}}
          />
        </View>
        <View style={{height: 20}} />
      </ScrollView>
    </View>
  );
};

export default PokemonList;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    marginHorizontal: 16,
    marginTop: 20,
    // marginBottom: 20,
  },
  pokeDex: {
    fontSize: 26,
    fontWeight: '700',
  },
  cardContent: {
    flex: 1,
    margin: '2%',
    paddingVertical: 10,
    backgroundColor: '#FF960B',
    borderRadius: 10,
    marginTop: 20,
    width: '50%',
  },
  sectionContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  typeWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(62, 238, 208, 0.5)',
  },
  textType: {
    fontSize: 12,
    fontWeight: '400',
    color: '#FFFFFF',
  },
});
