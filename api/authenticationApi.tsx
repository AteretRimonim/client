import axios from "axios";

// const host=process.env.HOST;
const host='http://localhost:8080/api'

// import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(email: string, password: string) {
    try {
        const response = await axios.post(`${host}/authentication/login`, { email, password });
        const { accessToken } = response.data;
    
        localStorage.setItem('accessToken', accessToken);

        return accessToken;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}