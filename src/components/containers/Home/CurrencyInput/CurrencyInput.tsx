import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import moment from 'moment';
import SpinnerButton from './SpinnerButton';
import PickerCurrency from './PickerCurrency';

type Props = {
  loading: boolean,
  symbols: Array<any>,
  onRefresh: Function,
  showErrorMessage: Function,
  sourceCurrency: string,
  destinationCurrency: string,
  setDestinationCurrencyDone: Function,
  lastRequestTime: number
};

class CurrencyInput extends Component<Props> {
  render() {
    const lastRequestTime = moment.unix(this.props.lastRequestTime).format("DD/MM/YYYY h:mm:ss A");
    return <View style={styles.outer}>
      <View style={styles.inner}>
        <TouchableOpacity onPress={() => {
          this.props.showErrorMessage('Changing source currency is a Premium Fixer API feature');
        }}>
          <Text style={styles.textStyle}>{this.props.sourceCurrency}</Text>
        </TouchableOpacity >
        <SpinnerButton onRefresh={this.props.onRefresh} loading={this.props.loading} />
        {
          this.props.symbols.length > 0 ?
            <PickerCurrency destinationCurrency={this.props.destinationCurrency}
              setDestinationCurrencyDone={this.props.setDestinationCurrencyDone}
              symbols={this.props.symbols} /> :
            <Text style={styles.textStyle}>{this.props.destinationCurrency}</Text>
        }
      </View>
      { 
        this.props.lastRequestTime &&
        <Text>Last successful request on {lastRequestTime}</Text>
      }
    </View>;
  }
}

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E0F6F9',
    padding: 10
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#E0F6F9',
    width: '100%'
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    alignItems: 'center',
    borderBottomColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 12,
    width: 100,
  }
});

export default CurrencyInput;
