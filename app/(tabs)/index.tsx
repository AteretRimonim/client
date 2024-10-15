import { Image, StyleSheet, Platform, SafeAreaView, Alert } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useState } from 'react';
import GenericForm from '@/components/GenericForm';
import SignInComponent from '@/screens/sign in/SignInComponent';
export default function HomeScreen() {
  const [text, setText] = useState('');
  // const formFields = [
  //   { name: 'username', placeholder: 'Enter your username', fieldType: 'text' },
  //   { name: 'age', placeholder: 'Enter your age', fieldType: 'number' },
  //   { name: 'email', placeholder: 'Enter your email', fieldType: 'email' },
  //   { name: 'password', placeholder: 'Enter your password', fieldType: 'password' },
  // ];

  // const handleFormSubmit = (data: { [key: string]: string }) => {
  //   Alert.alert('Form Submitted', JSON.stringify(data));
  // };
  return (
    <SafeAreaView style={styles.container}>
       {/* <GenericForm fields={formFields} onSubmit={handleFormSubmit} /> */}
   <SignInComponent></SignInComponent>
    <Button 
      title="לחץ כאן" 
      onPress={() => alert('כפתור נלחץ!')} 
      color="#fff" 
      backgroundColor="#28a745" 
    />
      <Input 
        fieldType='text'
        value={text} 
        onChangeText={setText} 
        placeholder="הקלד כאן" 
      />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    direction: 'rtl', // הגדרת כיווניות גלובלית
    alignItems: 'center', // כל האלמנטים יהיו מיושרים מימין
    
  },
});
