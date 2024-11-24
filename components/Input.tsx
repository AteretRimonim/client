import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, TouchableOpacity, TextInputProps } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // נדרש להוסיף חבילת Expo Icons

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
  style?: TextInputProps['style'];
};

const Input: React.FC<InputProps> = ({
  value,
  fieldType,
  onChangeText,
  placeholder,
  style,
}) => {
  const [secureEntry, setSecureEntry] = useState(fieldType === 'password');
  const [error, setError] = useState<string | null>(null);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChangeText = (text: string) => {
    if (fieldType === 'number') {
      const numericValue = text.replace(/[^0-9]/g, '');
      onChangeText(numericValue);
      setError(null);
    } else if (fieldType === 'email') {
      onChangeText(text);
      if (!validateEmail(text)) {
        setError('כתובת האימייל אינה תקינה');
      } else {
        setError(null);
      }
    } else {
      onChangeText(text);
      setError(null);
    }
  };

  const toggleSecureEntry = () => {
    setSecureEntry((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, style, error ? styles.inputError : null]}
          value={value}
          onChangeText={handleChangeText}
          keyboardType={getKeyboardType(fieldType)}
          placeholder={placeholder}
          secureTextEntry={secureEntry}
          autoCapitalize={fieldType === 'email' ? 'none' : 'sentences'}
        />
        {fieldType === 'password' && (
          <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
            <Ionicons
              name={secureEntry ? 'eye-off' : 'eye'}
              size={20}
              color="#888"
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    alignSelf: 'stretch',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: 'white',
    paddingRight: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    textAlign: 'right',
  },
  eyeIcon: {
    marginLeft: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginTop: 5,
  },
});

export default Input;
