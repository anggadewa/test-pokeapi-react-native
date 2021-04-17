import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';

export class Exchange extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text> Exchange Page </Text>
        <Image
          source={require('@images/instinct.png')}
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

export default Exchange;
