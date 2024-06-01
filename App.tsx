
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
 
  StyleSheet,
} from 'react-native';
import OnBoarding from './src/screens/OnBoarding'
import Signup from './src/screens/Signup'
import Signin from './src/screens/Signin';
import NavigationStack from './src/NavigationStack';



function App(): React.JSX.Element {
 
  return (
  
    <NavigationContainer>
      <NavigationStack/>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
 
});

export default App;
