import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class Background extends Component {
  render() { 
    return (
    <View style={styles.container}>
       <Image source={require('../../../../assets/homeBg.png')} />
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
