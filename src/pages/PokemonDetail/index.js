import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';

const PokemonDetail = ({navigation, route}) => {
  const [name, setName] = useState('');
  const [abilities, setAbilities] = useState([]);
  const [moves, setMoves] = useState([]);
  const [status, setStatus] = useState([]);
  const [types, setTypes] = useState([]);
  console.log('isi naviagation: ', route.params.id);

  const pokemonIndex = route.params.id;
  const imagePokemon = route.params.image;
  console.log('isi imgpoke: ', imagePokemon);
  const getDataDetailPokemon = async () => {
    await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`)
      .then((res) => {
        console.log('isi response api getdetail: ', res.data);
        setName(res.data.name);
        setAbilities(res.data.abilities);
        setMoves(res.data.moves);
        setStatus(res.data.stats);
        setTypes(res.data.types);
      });
  };
  console.log('ini nama: ', name);
  console.log('ini ability: ', abilities);
  console.log('ini moves: ', moves);
  console.log('ini status: ', status);
  console.log('ini types: ', types);

  useEffect(() => {
    getDataDetailPokemon();
  }, []);

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text style={styles.pokeName}>
          {name.charAt(0).toUpperCase() + name.slice(1)}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {types.map((item) => {
            return (
              <View style={styles.typeWrapper}>
                <Text style={styles.typeText}>{item.type.name}</Text>
              </View>
            );
          })}
        </View>
      </View>
      <View style={styles.detailPoke}>
        <Image source={{uri: imagePokemon}} style={styles.imgPoke} />
        <View style={{height: 50}} />
        <View style={styles.detailContent}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View key="Abilites">
              <Text style={styles.textTitle}>Abilities</Text>
              <View>
                {abilities.map((item) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.labelContent}>
                          Name of Abilities
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.itemContent}>
                          {item.ability.name.charAt(0).toUpperCase() +
                            item.ability.name.slice(1)}
                        </Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>

            <View key="Status" style={{marginTop: 20}}>
              <Text style={styles.textTitle}>Status</Text>
              <View>
                {status.map((item) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.labelContent}>
                          {item.stat.name.charAt(0).toUpperCase() +
                            item.stat.name.slice(1)}
                        </Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.itemContent}>{item.base_stat}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>

            <View key="Moves" style={{marginTop: 20}}>
              <Text style={styles.textTitle}>Moves</Text>
              <View>
                {moves.map((item) => {
                  return (
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 10,
                      }}>
                      <View style={{flex: 1}}>
                        <Text style={styles.labelContent}>Move Name</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <Text style={styles.itemContent}>{item.move.name}</Text>
                      </View>
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={{height: 100}} />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PokemonDetail;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(255,150,11, 0.5)',
  },
  container: {
    marginTop: 20,
    marginHorizontal: 16,
  },
  pokeName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  typeWrapper: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: 'rgba(255,150,11, 0.8)',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    // width: '25%',
  },
  typeText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  imgPoke: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    // backgroundColor: 'red',
    position: 'absolute',
    top: -120,
    alignSelf: 'center',
  },
  detailPoke: {
    height: '70%',
    width: '100%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  detailContent: {
    marginTop: 20,
    marginHorizontal: 16,
    // marginBottom: 80,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  labelContent: {
    fontSize: 14,
    fontWeight: '600',
    color: '#808080',
  },
  itemContent: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
});
