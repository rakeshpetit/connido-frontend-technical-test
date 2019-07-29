import React, { Component } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { refreshData, refreshSymbolData, pollData, setDestinationCurrencyDone, 
  setUserSourceAmountDone, setUserDestinationAmountDone, showErrorMessage,
  debugLogger  } from '../../../actions';
import { getSymbols, getSourceCurrencyAmount, getDestinationCurrencyAmount, getCalculatedSourceAmount, getCalculatedDestinationAmount } from '../../../selectors';
import CurrencyInput from './CurrencyInput/CurrencyInput';
import AmountInput from './AmountInput/AmountInput';
import CurrencyOutput from './CurrencyOutput/CurrencyOutput';
import ErrorScreen from './ErrorScreen/ErrorScreen';
import Background from '../Background/Background';

type Props = {
    navigation?: any,
    data: any,
    symbols: any,
    loading: boolean,
    errorMessage: string,
    sourceCurrency: string,
    destinationCurrency: string,
    sourceCurrencyAmount: number,
    destinationCurrencyAmount: number,
    calculatedSourceAmount: number,
    calculatedDestinationAmount: number,
    lastRequestTime: number,
    pollData: Function,
    refreshData: Function,
    refreshSymbolData: Function,
    setDestinationCurrencyDone: Function,
    setUserSourceAmountDone: Function,
    setUserDestinationAmountDone: Function,
    showErrorMessage: Function,
    debugLogger: Function,

};

export class HomePure extends Component<Props> {
  onRefresh = () => {
    this.props.refreshData();
  }
  componentDidMount() {
    this.props.pollData();
    this.props.refreshSymbolData();
  }

  render() {
    const { rates, timestamp }:{ rates: any, timestamp: number} = this.props.data || {};
    const { sourceCurrency, destinationCurrency, calculatedSourceAmount, calculatedDestinationAmount  }:
      { sourceCurrency: string, destinationCurrency: string,
        calculatedSourceAmount: number, calculatedDestinationAmount: number}  = this.props;
    return (
      <View style={styles.container}>
        <Background />
        <View style={{flex: 2, justifyContent: 'center'}}>
        <CurrencyInput
          symbols={this.props.symbols}
          loading={this.props.loading}
          onRefresh={this.onRefresh}
          lastRequestTime={this.props.lastRequestTime}
          showErrorMessage={this.props.showErrorMessage}
          sourceCurrency={this.props.sourceCurrency}
          destinationCurrency={this.props.destinationCurrency}
          setDestinationCurrencyDone={this.props.setDestinationCurrencyDone}
        />
        </View>
        <View style={{flex: 3}}>
        {
          rates &&
         <View>
            <CurrencyOutput lastUpdatedTimeStamp={timestamp} input={rates[sourceCurrency]} output={rates[destinationCurrency]} />
            <AmountInput
              setUserSourceAmountDone={this.props.setUserSourceAmountDone}
              setUserDestinationAmountDone={this.props.setUserDestinationAmountDone}
              calculatedSourceAmount={calculatedSourceAmount}
              calculatedDestinationAmount={calculatedDestinationAmount} />
          </View>
        }
        </View>
        <View style={{flex: 1, justifyContent: 'space-around'}}>
        <Button
          onPress={() => {
            this.props.navigation.navigate('About');
          }}
          title='About'
        />
        <Button
          onPress={() => {
            this.props.navigation.navigate('Bars');
          }}
          title='Bars'
        />
        </View>
        <ErrorScreen error={this.props.errorMessage} />
      </View>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    data: state.session.data,
    lastRequestTime: state.session.lastDataRequest,
    symbols: getSymbols(state),
    loading: state.session.loading,
    errorMessage: state.session.errorMessage,
    sourceCurrency: state.session.sourceCurrency,
    destinationCurrency: state.session.destinationCurrency,
    sourceCurrencyAmount: getSourceCurrencyAmount(state),
    destinationCurrencyAmount: getDestinationCurrencyAmount(state),
    calculatedSourceAmount: getCalculatedSourceAmount(state),
    calculatedDestinationAmount: getCalculatedDestinationAmount(state)
  };
}

const actionsToProps = {
    pollData,  
    refreshData,
    debugLogger,
    showErrorMessage,
    refreshSymbolData,
    setDestinationCurrencyDone,
    setUserSourceAmountDone,
    setUserDestinationAmountDone
  };

const Home = connect(mapStateToProps, actionsToProps)(HomePure);

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '10%',
        paddingBottom: '20%',
        backgroundColor: 'white',
        width: '100%'
    },
    titleText: {
        color: '#fff',
        fontSize: 30
    }

});

export default Home;