import {StyleSheet, Text, View, TextInput} from 'react-native';
import React, {forwardRef, useImperativeHandle, useRef} from 'react';

type Props = {
  label: string;
  secure?: boolean;
  placeholder?: string;
};

const Textinput = forwardRef(
  ({label, placeholder = '', secure = false}: Props, ref) => {
    const valueRef = useRef(null);

    useImperativeHandle(ref, () => ({
      getValue: () => {
        return valueRef.current.value;
      },
    }));
    return !secure ? (
      <View style={styles.container}>
        {label && <Text style={styles.labelText}>{label}</Text>}
        <TextInput
          style={styles.textInputBox}
          placeholder={placeholder}
          placeholderTextColor={'#7B7B8B'}
          ref={valueRef}
        />
      </View>
    ) : (
      <View style={styles.container}>
          {label && <Text style={styles.labelText}>{label}</Text>}
        <View style={styles.textInputBox}>
          <TextInput
            style={{color: '#fff'}}
            placeholder={placeholder}
            placeholderTextColor={'#7B7B8B'}
            ref={valueRef}
            secureTextEntry={true}
          />
        </View>
      </View>
    );
  },
);

export default Textinput;

const styles = StyleSheet.create({
  labelText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22.4,
    color: '#CDCDE0',
    marginBottom: 6,
  },
  textInputBox: {
    borderWidth: 1,
    height: 58,
    borderRadius: 8,
    padding: 16,
    borderColor: '#232533',
    backgroundColor: '#1E1E2D',
    color: '#fff',
  
  },
  container: {
    marginVertical: 12,
  },
});
