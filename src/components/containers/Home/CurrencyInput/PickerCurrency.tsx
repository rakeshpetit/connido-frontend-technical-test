import React, { Component } from 'react';
import { View, Picker, StyleSheet } from 'react-native';

type Props = {
    symbols: Array<any>,
    setDestinationCurrencyDone: Function,
    destinationCurrency: string
};

class PickerCurrency extends Component<Props, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            currency: this.props.destinationCurrency
        };
    }
    onCurrencySelect = (itemValue: string) => {
        this.setState({currency: itemValue});
        this.props.setDestinationCurrencyDone(itemValue);
    }
  render() {
    if (this.props.symbols.length <= 0) {
        return undefined;
    }
    return (
        <View style={styles.container}>
            <Picker
                selectedValue={this.state.currency}
                style={{
                    backgroundColor: "white",
                    alignContent: "center",
                    height: 200,
                    width: 100
                }}
                itemStyle={{ backgroundColor: "white" }}
                onValueChange={(itemValue: string) =>
                    this.onCurrencySelect(itemValue)
                }>
                {this.props.symbols.map((symbol, index) => {
                    return (
                        <Picker.Item
                            key={index}
                            label={symbol.key}
                            value={symbol.key}
                        />
                    );
                })}
            </Picker>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
    }
});

export default PickerCurrency;
