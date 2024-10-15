import React from 'react';
import { StyleSheet, TextInput, View, TextInputProps } from 'react-native';

type FieldType = 'text' | 'number' | 'email' | 'password';

const getKeyboardType = (type: FieldType) => {
  switch (type) {
    case 'number':
      return 'numeric';
    case 'email':
      return 'email-address';
    default:
      return 'default';
  }
};

type InputProps = {
  value: string;
  fieldType: FieldType;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: TextInputProps['style'];
};

const Input: React.FC<InputProps> = ({
  value,
  fieldType,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  style,
}) => {
  const handleChangeText = (text: string) => {
    if (fieldType === 'number') {
      // סינון תווים שאינם מספרים
      const numericValue = text.replace(/[^0-9]/g, '');
      onChangeText(numericValue);
    } else {
      onChangeText(text);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, style]}
        value={value}
        onChangeText={handleChangeText}
        keyboardType={getKeyboardType(fieldType)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize={fieldType === 'email' ? 'none' : 'sentences'} // התאמה לאימייל
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: 'stretch',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    textAlign: 'right',
  },
});

export default Input;
