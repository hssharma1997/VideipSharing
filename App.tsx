
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
import Signup from './src/screens/Signup'



function App(): React.JSX.Element {
 
  return (
    // <SafeAreaView style={{flex:1}} >
    //  <OnBoarding/>
    <Signup/>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
