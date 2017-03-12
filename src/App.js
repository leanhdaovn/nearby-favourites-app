import React, { Component} from 'react';
import { View} from 'react-native';
import { Provider} from 'react-redux';
import configureStore from './configureStore';
import reducer from './rootReducer';
import StatusBar from './components/StatusBar';
import ChangeLocationActionButton from './components/ChangeLocationActionButton';
import PlacesListView from './components/PlacesListView';
import styles from './styles'

const store = configureStore();

const App = () => (
  <Provider store={store} style={styles.container}>
    <View>
      <StatusBar title="Nearby Starbucks Coffee" />
      <ChangeLocationActionButton />
      <PlacesListView/>
    </View>
  </Provider>
)

export default App;
