
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
 
  StyleSheet,
} from 'react-native';
import NavigationStack from './src/Navigation/NavigationStack';



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
