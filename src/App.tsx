import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppRoute from './components/routes/Routes';
import Store from './store/Store';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Provider store={Store}>
        <AppRoute />
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
