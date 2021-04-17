import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ExchangeIcon, MyPokemonListIcon, PokemonListIcon} from '../../assets';

// import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'PokemonList') {
      return <PokemonListIcon />;
    }
    if (title === 'MyPokemonList') {
      return <MyPokemonListIcon />;
    }
    if (title === 'Exchange') {
      return <ExchangeIcon />;
    }
    return <ExchangeIcon />;
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Icon />
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  text: (active) => ({
    fontSize: 12,
    color: active ? '#FF960B' : '#808080',
    marginTop: 4,
    fontWeight: '700',
  }),
  img: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
