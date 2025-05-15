import {StatusBar, View} from 'react-native';
import React from 'react';
import './global.css';
import RootNavigator from './src/navigation/RootNavigator';

const App = () => {
  return (
    <View className="flex-1">
      <StatusBar barStyle={'dark-content'} />
      <RootNavigator />
    </View>
  );
};

export default App;
