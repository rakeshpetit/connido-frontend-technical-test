import React, { Component } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface CompProps {
    error: string
}

class ErrorScreen extends Component<CompProps> {
    animatedValue = new Animated.Value(0);

  componentDidMount () {
    this.runAnimation();
  }

  componentDidUpdate() {
    this.animatedValue = new Animated.Value(0);
    this.runAnimation();
  }

  runAnimation = () => {
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 100,
          duration: 10000,
          useNativeDriver: true
        }),
        Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true
        })
      ]).start();
  }
render() {

    const interpolatedRotateAnimation = this.animatedValue.interpolate({
        inputRange: [ 0, 100 ],
        outputRange: [ 60, 100 ]
      });
    return (
        <View style= { styles.container }>
            <Animated.Text style= { [styles.titleText, { transform: [ { translateY: interpolatedRotateAnimation } ] }] }>
             {this.props.error} </Animated.Text>
        </View>
    );
}   
};

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        bottom: '18%',
        justifyContent: 'center',
        position: 'absolute',
    },
    titleText: {
        color: 'red',
        fontSize: 15
    }

});

export default ErrorScreen;