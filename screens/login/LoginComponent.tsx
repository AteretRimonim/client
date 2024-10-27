import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/Input';

export default function LoginComponent() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>login Component</Text>
      <Text style={styles.label}>user name:</Text>
      <Input 
        fieldType='text'
        value={userName} 
        onChangeText={setUserName} 
        placeholder="שם משתמש" 
      />
     
      <Text style={styles.label}>password:</Text>
      <Input 
        fieldType='password'
        value={password} 
        onChangeText={setPassword} 
        placeholder="סיסמא" 
       
      />
    </View>
  )
}

const styles = StyleSheet.create({container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#f8f8f8',
    direction: 'rtl',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    alignSelf: 'flex-start',
    textAlign: 'right',
    width: '100%',
  },
 
})