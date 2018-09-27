import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

type Props = {
  calculatedSourceAmount: number,
  calculatedDestinationAmount: number,
  setUserSourceAmountDone: Function,
  setUserDestinationAmountDone: Function
};

class AmountInput extends Component<Props> {
  onSourceAmountChange = (text: any) => {
    if(!isNaN(text)) {
      this.props.setUserSourceAmountDone(text);
    }
  }
  onDestinationAmountChange = (text: any) => {
    if(!isNaN(text)) {
      this.props.setUserDestinationAmountDone(text);
    }
  }
  render() {
    const { calculatedSourceAmount, calculatedDestinationAmount } = this.props;
    return (
      <View style={styles.container}>
        <TextInput onChangeText={(text: string) => this.onSourceAmountChange(text)}
          keyboardType={'numeric'} style={styles.textInput}>
          {calculatedSourceAmount ? calculatedSourceAmount : ''}</TextInput>
        <TextInput onChangeText={(text: string) => this.onDestinationAmountChange(text)} 
        keyboardType={'numeric'} style={styles.textInput}>
          {calculatedDestinationAmount ? calculatedDestinationAmount : ''}</TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#ECF9E0',
    width: '100%',
    padding: 10
  },
  textInput: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: '#000000',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    width: '45%'
  }
});

export default AmountInput;
