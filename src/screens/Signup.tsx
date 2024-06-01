import {Alert, Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useRef} from 'react';
import Textinput from '../components/Textinput';
import Button from '../components/Button';

const SignUp = ({navigation}) => {
  const userNameRef = useRef(null);
  const userEmailRef = useRef(null);
  const passwordRef = useRef(null);


  const onSignup = useCallback(()=>{
    if(userNameRef.current.value === '' || userEmailRef.current.value === '' || passwordRef.current.value === ''){
      Alert.alert('Error','Please fill all the fields')
    }else{
     
      navigation.navigate('SignIn')
    }
  },[])
  return (
    <SafeAreaView style={styles.page}>
      <View style={{flex: 1, padding: 16}}>
        <View style={{flex: 0.15, justifyContent: 'flex-end'}}>
          <Image
            source={require('../images/logo.png')}
            style={{height: 50, width: 115}}
            resizeMode="contain"
          />
        </View>
        <View style={{marginVertical: 8, flex: 0.85}}>
          <Text
            style={styles.signUpText}>Sign up</Text>
          <Textinput
            label={'Username'}
            placeholder={'Your unique username'}
            inputRef={userNameRef}
          />
          <Textinput
            label={'Email'}
            placeholder={'example@example.com'}
            inputRef={userEmailRef}
          />
          <Textinput
            label={'Password'}
            placeholder={'Enter your password'}
            secure={true}
            inputRef={passwordRef}
          />
          <Button label={'Sign Up'} onPress={() => onSignup()} />
          <Text
            style={styles.loginText}>
            Already have an account?{' '}
            <Text style={{color: '#FF9001'}}>Login</Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#161622',
  },
  signUpText:{
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 32,
    color: '#fff',
    marginVertical: 18,
    fontFamily: 'Poppins-Regular',
  },
  loginText:{
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    color: '#CDCDE0',
  }
});
