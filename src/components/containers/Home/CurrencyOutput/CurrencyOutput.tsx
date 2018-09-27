import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import moment from 'moment';

type Props = {
  lastUpdatedTimeStamp: number,
  input: string,
  output: string
};

class CurrencyOutput extends Component<Props> {
  render() {
    const { input, output, lastUpdatedTimeStamp } = this.props;
    if (lastUpdatedTimeStamp === undefined) {
      return undefined;
    }
    const lastUpdatedTime = moment.unix(this.props.lastUpdatedTimeStamp).format('DD/MM/YYYY h:mm:ss A');
    return (
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Text style={styles.textInput}>{input}</Text>
          <Text style={styles.textInput}>{output}</Text>
        </View>
        <Text>Last updated API data on {lastUpdatedTime}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  outer: {
    alignItems: 'center',
    backgroundColor: '#F7F9E0'
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#F7F9E0',
    padding: 10
  },
  textInput: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderBottomColor: '#000000',
    borderWidth: 1,
    backgroundColor: 'white',
    padding: 10,
    fontSize: 20,
    width: '45%'
  }
});

export default CurrencyOutput;
