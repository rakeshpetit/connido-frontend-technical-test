import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import moment from "moment";
import SpinnerButton from "./SpinnerButton";
import PickerCurrency from "./PickerCurrency";

type Props = {
    loading: boolean;
    symbols: Array<any>;
    onRefresh: Function;
    showErrorMessage: Function;
    sourceCurrency: string;
    destinationCurrency: string;
    setDestinationCurrencyDone: Function;
    lastRequestTime: number;
};

type State = {
    showPicker: boolean;
};

class CurrencyInput extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            showPicker: false
        };
    }
    render() {
        const lastRequestTime = moment
            .unix(this.props.lastRequestTime)
            .format("DD/MM/YYYY h:mm:ss A");
        return (
            <View style={styles.outer}>
                <View style={styles.inner}>
                    <TouchableOpacity
                        style={{
                            flex: 2,
                            alignItems: "flex-end"
                        }}
                        onPress={() => {
                            this.props.showErrorMessage(
                                "Changing source currency is a Premium Fixer API feature"
                            );
                        }}>
                        <Text style={styles.textStyle}>
                            {this.props.sourceCurrency}
                        </Text>
                    </TouchableOpacity>
                    <View
                        style={{
                            flex: 1,
                            alignItems: "center"
                        }}>
                        <SpinnerButton
                            onRefresh={this.props.onRefresh}
                            loading={this.props.loading}
                        />
                    </View>
                    <View
                        style={{
                            flex: 2,
                            alignItems: "flex-start"
                        }}>
                        {this.props.symbols.length > 0 &&
                        this.state.showPicker ? (
                            <PickerCurrency
                                destinationCurrency={
                                    this.props.destinationCurrency
                                }
                                setDestinationCurrencyDone={(value: string) => {
                                    this.setState({
                                        showPicker: false
                                    });
                                    this.props.setDestinationCurrencyDone(
                                        value
                                    );
                                }}
                                symbols={this.props.symbols}
                            />
                        ) : (
                            <TouchableOpacity
                                onPress={() => {
                                    this.setState({
                                        showPicker: true
                                    });
                                }}>
                                <Text style={styles.textStyle}>
                                    {this.props.destinationCurrency}
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
                {this.props.lastRequestTime && (
                    <Text>
                        Last successful request on {lastRequestTime}
                    </Text>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    outer: {
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#E0F6F9",
        padding: 10
    },
    inner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "#E0F6F9",
        width: "100%"
    },
    textStyle: {
        fontSize: 16,
        color: "black",
        alignItems: "center",
        borderBottomColor: "#000000",
        borderWidth: 1,
        backgroundColor: "white",
        padding: 12,
        width: 100
    }
});

export default CurrencyInput;
