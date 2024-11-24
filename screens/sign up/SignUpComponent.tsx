import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Input from '@/components/Input'
import Button from '@/components/Button';
import userStore from '@/store/userStore';
import { login } from "@/api/authenticationApi";
import { signUpUser } from '@/api/userApi';
import { User } from '@/types/userType';
export default function SignUpComponent() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSignUp = async () => {

    setLoading(true);
     const userData: User = { userName, email,password, };
    try {
      const statuseCode = await signUpUser (userData);
      console.log('🙈🙈🙈🙈'+statuseCode)
      if(statuseCode==200)
      {
        const token = await login(email, password);
        setMessage('Logged in with token:');
      }
      else
        setMessage('בעייה בתקינות הנתונים');
       
    
  } catch (err) {
    setMessage('Login failed. Please check your credentials.');
  }
    
    finally {
        setLoading(false);
    }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignInComponent</Text>
      <Text style={styles.label}>user name:</Text>
      <Input 
        fieldType='text'
        value={userName} 
        onChangeText={setUserName} 
        placeholder="שם משתמש" 
      />
      <Text style={styles.label}>email:</Text>
      <Input 
        fieldType='email'
        value={email} 
        onChangeText={setEmail} 
        placeholder="מייל" 
     
      />
      <Text style={styles.label}>password:</Text>
      <Input 
        fieldType='password'
        value={password} 
        onChangeText={setPassword} 
        placeholder="סיסמא" 
       
      />        <Button title="sign up" onPress={handleSignUp} disabled={loading} />
      {message && (
                <Text
                    style={[
                        styles.messageText,
                        userStore.isLoggedIn ? styles.successText : styles.errorText
                    ]}
                >
                    {message}
                </Text>
            )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#f8f8f8',
    writingDirection: 'rtl',
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
  messageText: {
      
    fontSize: 16,
},
successText: {
    color: "green",
},
errorText: {
    color: "red",
},
})