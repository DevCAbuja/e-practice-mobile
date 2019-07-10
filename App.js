import React, { Component } from 'react';
import { ActivityIndicator, View, } from 'react-native';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import Store from './src/store/index';
import { RobotoRegular, RobotoBold } from './src/utils/components/AppText';
import { PRI_COLOR } from './src/utils/constants';

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
            <RobotoBold style={{alignSelf: 'center', textAlign: 'center'}}>
              Welcome to E-Practice
            </RobotoBold>
            <RobotoRegular style={{alignSelf: 'center', textAlign: 'center'}}>
              We are here to learn while building something spectacular. #EnjoyCoding
            </RobotoRegular>
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
