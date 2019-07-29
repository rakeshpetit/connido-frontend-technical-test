import React, { Component } from 'react';
import { Button, TextInput, StyleSheet, View } from 'react-native';
import Background from '../Background/Background';

type Props = {
    navigation?: any
};

export class Bars extends Component<Props> {
onFirstBarAmount = (value: string) => {
    console.log('value', value)
}
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
          <TextInput
            onChangeText={(text: string) => this.onFirstBarAmount(text)}
            keyboardType={"numeric"}
            style={styles.textInput}
          >
          </TextInput>
          <TextInput
            onChangeText={(text: string) => this.onFirstBarAmount(text)}
            keyboardType={"numeric"}
            style={styles.textInput}
          >
          </TextInput>
        </View>
        <View style={{flex: 3}}></View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          onPress={() => {
            if (navigation) {
              navigation.goBack();
            }
          }}
          title="Back"
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    },
    textStyle: {
        fontSize: 25,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
    },
    textInput: {
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: '#000000',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    width: '20%'
    }
});

export default Bars;