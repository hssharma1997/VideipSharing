
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
 
  View,
} from 'react-native';
import OnBoarding from './src/screens/onBoarding'


function App(): React.JSX.Element {
 
  return (
    // <SafeAreaView style={{flex:1}} >
     <OnBoarding/>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
