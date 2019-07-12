import React, { Component } from 'react';
import { ActivityIndicator, View, } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './src/store/index';
import { PRI_COLOR } from './src/utils/constants/colors';
import AppText from './src/utils/components/AppText';

const persistor = persistStore(Store);

export default class App extends Component {

  renderLoading = () => {
    <ActivityIndicator
      size={40}
      color={PRI_COLOR}
    />
  }

  render() {
    return (
      <Provider store={Store}>
        <PersistGate persistor={persistor} loading={this.renderLoading()}>
          <View style={{justifyContent: 'center', flex: 1, alignItems: 'center', padding: 30}}>
            <AppText style={{alignSelf: 'center', textAlign: 'center', color: PRI_COLOR }} family='Roboto' variant='Bold'>
              Welcome to E-Practice
            </AppText>
            <AppText style={{alignSelf: 'center', textAlign: 'center'}} family='Roboto' variant='Regular' >
              We are here to learn while building something spectacular. #EnjoyCoding
            </AppText>
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
