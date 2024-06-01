import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type Props={
    label:string,
    onPress:()=>void
}

const Button = ({label,onPress}:Props) => {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.0}}
      end={{x: 1.0, y: 0.0}}
      locations={[0.9, 1]}
      colors={['#FF8C00', '#FFA300']}
      style={styles.container}>
      <Pressable style={styles.preessableContainer} onPress={onPress}>
        <Text style={styles.textStyle}>{label}</Text>
      </Pressable>
    </LinearGradient>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 60,
    borderRadius: 8,
    padding: 10,
    marginTop: 12,
    justifyContent: 'flex-end',
  },
  preessableContainer: {justifyContent: 'center', height: '100%'},
  textStyle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 22.4,
    textAlign: 'center',
  },
});
