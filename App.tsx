/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  // StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import SingleItem from './components/SingleItem';
import {DUMMY_ITEM} from './helpers';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Store} from './store/store';
import {Provider} from 'react-redux';
import Items from './components/Items';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={Store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Items />
        <View style={styles.container}>
          <Text style={styles.text}> Items in cart: </Text>
          <Items isShowingCart />
        </View>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: 'lightblue',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 15,
  },
});

export default App;
