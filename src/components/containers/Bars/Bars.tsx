import React, { Component } from "react";
import { Button, TextInput, StyleSheet, View } from "react-native";

type Props = {
  navigation?: any;
};

export class Bars extends Component<Props> {
  onFirstBar = (value: string) => {
    console.log("value", value);
  }

  onSecondBar = (value: string) => {
    console.log("value", value);
  }

  render() {
    const { navigation } = this.props;
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
            <View style={{ marginRight: '10%', width: '10%', height: '70%', backgroundColor: '#F3856E'}}></View>
            <View style={{ width: '10%', height: '100%', backgroundColor: '#6EF372'}}></View>
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
