import React, { Component } from 'react';
import { StyleSheet, Image, Animated, TouchableOpacity } from 'react-native';

type Props = {
  onRefresh: Function,
  loading: boolean
};

class SpinnerButton extends Component<Props> {
  animatedValue = new Animated.Value(0);
  componentDidMount () {
    this.runAnimation();
  }

  runAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(this.animatedValue, {
          toValue: 100,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(this.animatedValue, {
          toValue: 0,
          duration: 0,
          useNativeDriver: true
        })
      ])
    ).start();
  }

  componentDidUpdate() {
    this.animatedValue = new Animated.Value(0);
    this.runAnimation();
  }

  renderSpinner = () => {
    const spinnerIcon = require('../../../../../assets/spinner.png');
    const interpolatedRotateAnimation = this.animatedValue.interpolate({
        inputRange: [ 0, 100 ],
        outputRange: [ '0deg', '360deg' ]
      });
    return <Animated.Image source={spinnerIcon}
    style={ [ styles.imageStyle, { transform: [ { rotate: interpolatedRotateAnimation } ] } ] } />;
  }

  renderButton = () => {
    const refreshIcon = require('../../../../../assets/refresh.png');
    return (
        <TouchableOpacity onPress={() => {
            this.props.onRefresh();
        }}>
            <Image style={styles.imageStyle} source={refreshIcon} />
        </TouchableOpacity>
    );
  }

  render() {   
    return (
        this.props.loading ? this.renderSpinner() : this.renderButton()
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 50
  }
});

export default SpinnerButton;
