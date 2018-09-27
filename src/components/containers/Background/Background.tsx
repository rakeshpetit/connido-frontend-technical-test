import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Background extends Component {
  render() {
    const backgroundImage = require('../../../../assets/homeBg.png');
    return (
    <View style={styles.container}>
       <Image source={backgroundImage} />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    opacity: 0.4,
    flex: 1,
    position: 'absolute',
    justifyContent: 'center'
  }
});

export default Background;
