import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import Button from '../components/Button';

const onBoarding = () => {
  return (
    <SafeAreaView style={styles.page}>
      <View style={{padding: 16,flex:1,justifyContent:'space-around'}}>
        <View style={{alignSelf: 'center',}}>
          <Image
            source={require('../images/logo.png')}
            style={{height: 50, width: 115}}
            resizeMode="contain"
          />
        </View>
        <View style={{alignSelf: 'center', }}>
          <Image
            source={require('../images/Onboarding-img.png')}
            style={{height: 300}}
            resizeMode="contain"
          />
        </View>
        <View>
          <Text
            style={{
              fontWeight: "600",
              fontSize: 30,
              lineHeight: 36,
              color: '#fff',
              textAlign: 'center',
              letterSpacing: -1,
            }}>
            Discover Endless Possibilities with{' '}
            <Text style={{color: '#FF8E01'}}>Aora</Text>
          </Text>
          <Text
            style={{
              fontWeight: "400",
              fontSize: 14,
              lineHeight: 22.4,
              textAlign: 'center',
              color: '#fff',
              marginVertical: 16,
            }}>
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>
        </View>
        <Button label={' Continue with Email'} onPress={()=>null}/>
        
      </View>
    </SafeAreaView>
  );
};

export default onBoarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#161622',
  },
});
