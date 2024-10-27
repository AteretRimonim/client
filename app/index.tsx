import { StyleSheet, Platform, SafeAreaView } from 'react-native';
import SignInComponent from './(screens)/SignInComponent';


export default function HomeScreen() {
  return (
    <>
    <SafeAreaView style={styles.container}>
        <p style={styles.title}>for the meantime 🤨</p>
        <SignInComponent></SignInComponent>
        </SafeAreaView>
        </>
  );
}

const styles = StyleSheet.create({
  title: {
   color:"red",
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    direction: 'rtl', // הגדרת כיווניות גלובלית
    alignItems: 'center', // כל האלמנטים יהיו מיושרים מימין
    
  },

});
