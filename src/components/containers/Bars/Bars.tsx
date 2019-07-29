import React, { Component } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

type Props = {
  navigation?: any;
};

type State = {
    firstBar: String,
    secondBar: String,
}

export class Bars extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            firstBar: '',
            secondBar: ''
        }
    }
    
  onFirstBar = (value: string) => {
    this.setState({ ...this.state, firstBar: value})
  }

  onSecondBar = (value: string) => {
    this.setState({ ...this.state, secondBar: value})
  }

  getHeight = () => {
      const firstValue = Number(this.state.firstBar)
      const secondValue = Number(this.state.secondBar)
      if(firstValue > secondValue){
          const smallerValue = 100 * (secondValue / firstValue)
          return { first: '100%', second: smallerValue+'%'}
      }
      else if(secondValue > firstValue){
        const smallerValue = 100 * (firstValue / secondValue)
        return { first: smallerValue+'%', second: '100%'}
    }
    else if(firstValue>0 && secondValue === firstValue) {
        return { first: '100%', second: '100%'}
    }
    else return { first: '0%', second: '0%'}
  }

  render() {
    const { navigation } = this.props;
    const barStyle = this.getHeight()
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <TextInput
            onChangeText={(text: string) => this.onFirstBar(text)}
            keyboardType={"numeric"}
            style={styles.textInput}
          />
          <TextInput
            onChangeText={(text: string) => this.onSecondBar(text)}
            keyboardType={"numeric"}
            style={styles.textInput}
          />
        </View>
        <View style={{ flex: 3, alignItems: 'flex-end', justifyContent: 'center', flexDirection: 'row' }}>
            <View style={{ marginRight: '10%', width: '10%', height: barStyle.first, backgroundColor: '#F3856E'}}></View>
            <View style={{ width: '10%', height: barStyle.second, backgroundColor: '#6EF372'}}></View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
  container: {
    flex: 1
  },
  textStyle: {
    fontSize: 25,
    color: "black",
    alignItems: "center",
    justifyContent: "center",
    padding: 12
  },
  textInput: {
    marginTop: 20,
    marginBottom: 10,
    borderBottomColor: "#000000",
    backgroundColor: "white",
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    width: "20%"
  }
});

export default Bars;
