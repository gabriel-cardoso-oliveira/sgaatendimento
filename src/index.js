import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import CodePush from 'react-native-code-push';

import './config/ReactotronConfig';
import Routes from './routes';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#3e3e3e" />

      <Routes />
    </>
  );
};

// const styles = StyleSheet.create({});

export default CodePush({
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
})(App);
