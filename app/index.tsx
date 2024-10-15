import { StyleSheet, Platform } from 'react-native';
import SignInComponent from './(screens)/SignInComponent';
import SignUpComponent from './(screens)/SignUpComponenta';


export default function HomeScreen() {
  return (
    <>
        {/* <p style={styles.title}>for the meantime 🤨</p> */}
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
