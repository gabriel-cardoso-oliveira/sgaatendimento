import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import { useRoute } from '@react-navigation/native';
import RNShake from 'react-native-shake';
import { useNavigation } from '@react-navigation/native';
import Background from './../../components/Background';

// import { Container } from './styles';

export default function Main() {
  const [load, setLoad] = useState(false);

  const route = useRoute();

  const navigation = useNavigation();

  const routeParams = route.params;

  function startLoad() {
    setLoad(true);
  }

  function stopLoad() {
    setLoad(false);
  }

  useEffect(() => {
    RNShake.addEventListener('ShakeEvent', () => {
      navigation.navigate('Config');
    });

    return () => {
      RNShake.removeEventListener('ShakeEvent');
    }
  }, [])

  return (
    <Background>
      <ActivityIndicator size="large" bool={{load}} />

      <WebView
        source={{ uri: routeParams.url }}
        onLoadStart={startLoad}
        onLoad={stopLoad}
      />
    </Background>
  );
}
