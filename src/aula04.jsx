import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

class Aula04 extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Image
            source={require('../assets/icon.png')}
            style={ styles.icon}
        />
        <Image
            source={{uri: 'https://wallpapercat.com/w/full/d/a/8/5815708-2160x3840-iphone-hd-4k-background-image.jpg'}}
            style={ styles.icon}
        />

      </View>
    );
  }
}

export default Aula04;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: 150,
    height: 300,
  }
});