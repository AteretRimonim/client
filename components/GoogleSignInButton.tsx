import React from 'react';
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { Alert, View } from 'react-native';
import axios from 'axios'; // לשימוש בבקשות HTTP

const GoogleSignInButton: React.FC = () => {
  // טיפוס התגובה של GoogleLogin
  const responseGoogle = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    if ('error' in response) {
      // טיפול בשגיאה במקרה של כישלון בהתחברות
      Alert.alert('Error', 'Google login failed');
      console.log("Google login failed: ", response.error);
    } else if ('tokenId' in response) {  // נוודא שיש לנו tokenId
      console.log("Google login success");
      console.log(response);  // מידע על המשתמש, כולל טוקן

      // שליחת הטוקן לשרת לצורך אימות
      try {
        const token = response.tokenId;
        const res = await axios.post('http://localhost:3000/api/authGoogle/verify-google-token', { token });

        if (res.data.success) {
          // התחברות הצליחה
          Alert.alert('Success', 'You have logged in successfully');
        } else {
          // אם משהו לא תקין באימות
          Alert.alert('Error', 'Google token verification failed');
        }
      } catch (error) {
        // טיפול בשגיאה בבקשת השרת
        Alert.alert('Server Error', 'An error occurred while verifying the token');
        console.error("Error while verifying token:", error);
      }
    }
  };

  return (
    <View>
      <GoogleLogin
        clientId="778451976846-kan25o574va5h0vilebri3rp1ga5cbes.apps.googleusercontent.com"  
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </View>
  );
};

export default GoogleSignInButton;
