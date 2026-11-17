import 'react-native-gesture-handler';
import "./global.css"
import React from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import AuthProvider from './src/contexts/auth'

import Routes from './src/routes';

export default function App() {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content"/>
          <Routes/>
        </AuthProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
};
