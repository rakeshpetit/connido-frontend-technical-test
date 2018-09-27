import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { Routes } from './components/routes/Routes';
import Store from './store/Store';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Provider store={Store}>
        <Routes />
      </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
