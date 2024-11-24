import axios from "axios";
const host=process.env.HOST;
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(username: string, password: string) {
    try {
        const response = await axios.post(`${host}/login`, { username, password });
        const { accessToken } = response.data;

        if (window && window.localStorage) 
        {
            localStorage.setItem('accessToken', accessToken);
        } 
        else 
        {
            await AsyncStorage.setItem('accessToken', accessToken);
        }

        return accessToken;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}