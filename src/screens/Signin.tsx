import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Textinput from '../components/Textinput';
import Button from '../components/Button';

const Signin = () => {
    const userEmailRef = useRef('');
  const passwordRef = useRef('');

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
              <Text style={styles.forgotPassText}>Forgot password</Text>
              <Button label={'Sign Up'} onPress={() => null} />
    
              <Text
                style={styles.loginText}>
                Don't have an account?{' '}
                <Text style={{color: '#FF9001'}}>Signup</Text>
              </Text>
            </View>
          </View>
        </SafeAreaView>
      );
  
}

export default Signin

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
      },
      forgotPassText:{
        textAlign:'right',color:'##CDCDE0',fontWeight:'400',fontSize:14,lineHeight:20
      }
})