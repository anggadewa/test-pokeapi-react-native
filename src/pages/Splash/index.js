import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, [navigation]);
  return (
    <View style={styles.wrapper}>
      <Image source={require('@images/pikachu.png')} style={styles.imgSplash} />
      <Text style={styles.textSplash}>Pokemon List</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  wrapper: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  imgSplash: {
    width: 75,
    height: 75,
    resizeMode: 'contain',
  },
  textSplash: {
    fontSize: 12,
    fontWeight: '700',
  },
});
