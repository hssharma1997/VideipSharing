
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
import Signin from './src/screens/Signin';



function App(): React.JSX.Element {
 
  return (
    // <SafeAreaView style={{flex:1}} >
    //  <OnBoarding/>
    // <Signup/>
    <Signin/>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
