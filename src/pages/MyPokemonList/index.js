import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

export class MyPokemonList extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> My Pokemon List Page </Text>
        <Image
          source={require('@images/gotcha.png')}
          style={{
            width: 150,
            height: 150,
            resizeMode: 'contain',
            marginTop: 20,
          }}
        />
      </View>
    );
  }
}

export default MyPokemonList;
