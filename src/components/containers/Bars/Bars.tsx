import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Background from '../Background/Background';

type Props = {
    navigation?: any
};

export class Bars extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
        <View style={styles.container}>
            <Background />
            <Button
                onPress={() => {
                    if (navigation) {
                        navigation.goBack();
                    }
                }}
                title='Back'
            />
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
      }
});

export default Bars;