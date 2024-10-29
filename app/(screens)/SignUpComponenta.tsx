import { StyleSheet, Text, View,Alert } from 'react-native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import UserStore from '@/store/userStore';
import {User} from '@/types/userType';
import { observer } from 'mobx-react';
import axios from 'axios';

const SignUpComponent:React.FC =observer(()=> {


  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

useEffect(()=>{
  fetchdatausers();
},[])


  const handleAddUser = async () => {
    if (userName && email && password) {
      const emailCheck = UserStore.users.some(user => user.email === email);
      if(emailCheck){
        Alert.alert("You are already registered in the system, please enter in the SignIn page");
      }
      else{
          const newUser = {
            userName:userName,
            email:email,
            password:password
          };

          try {
            const response = await axios.post('http://localhost:8003/api/users/', newUser);
            UserStore.addUser(response.data);
          } catch (error) {
            console.error('Error adding user:', error);
          }
        
        }

        setUserName('');
        setEmail('');
        setPassword('');
    }
    else{
      Alert.alert("Please enter both name and email and password");
    }
  };

  

  const fetchdatausers = async () => {
    try {
      const response= await axios.get('http://localhost:8003/api/users/');
      UserStore.users=response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SignUpComponent</Text>
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
       
      />
      <Button
      title= 'submit'
      onPress={handleAddUser}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    // backgroundColor: '#f8f8f8',
    // direction: 'rtl',
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

export default SignUpComponent;