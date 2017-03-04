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

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedLocation: null
    };
  }

  render() {
    return (
      <Provider store={store} style={styles.container}>
        <View>
          <StatusBar title="Nearby Starbucks Coffee" />
          <ChangeLocationActionButton
            onPlaceReturn={(place) => {
              this.setState({
                selectedLocation: place
              })
            }}
          />
          <PlacesListView selectedLocation={this.state.selectedLocation}/>
        </View>
      </Provider>
    );
  }
}

export default App;
