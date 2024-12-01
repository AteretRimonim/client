import { StyleSheet, Platform } from 'react-native';
import SignInComponent from './(screens)/SignInComponent';
import SignUpComponent from './(screens)/SignUpComponenta';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import React, { useEffect } from 'react';



export default function HomeScreen() {

  return (
    <>
        {/* <p style={styles.title}>for the meantime 🤨</p> */}
        {/* <SignUpComponent

        /> */}
        <SignUpComponent>

        </SignUpComponent>
          
        

        </>
  );
}

const styles = StyleSheet.create({
  title: {
   color:"red",
  },

});
