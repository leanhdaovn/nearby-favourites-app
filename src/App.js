import React, { Component} from 'react';
import { View} from 'react-native';
import { createStore} from 'redux';
import { Provider} from 'react-redux';
import reducer from './rootReducer';
import StatusBar from './components/StatusBar';
import ChangeLocationActionButton from './components/ChangeLocationActionButton';
import PlacesListView from './components/PlacesListView';
import styles from './styles'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());;

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
