import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, GestureResponderEvent } from 'react-native';

type ButtonProps = {
  title: string;
  onPress: (event: GestureResponderEvent) => void ;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({ title, onPress,disabled = false, color = '#fff', backgroundColor = '#007bff' }) => {
  return (
    <TouchableOpacity
     onPress={disabled ? undefined : onPress}
     disabled={disabled} 
     style={[styles.button, disabled && styles.disabledButton, { backgroundColor }]}>
      <Text style={[styles.text, { color }]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  disabledButton: {
    backgroundColor: "#A9A9A9", 
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Button;