import axios from "axios";
import UserStore from '@/store/userStore';
import { LoginRequest, User } from "@/types/userType";

const host=process.env.HOST;

/**
 * Sends a login request to the server.
 * @param {LoginRequest} data - User credentials (email and password).
 * @returns {Promise<Object>} - Server response data.
 * 
 * Accepts all HTTP status codes and returns the server's response.
 */
export const login = async (data:LoginRequest) => {
    try {
      const response = await axios.post(`${host}/api/users/login`, data, {
        validateStatus: () => true, // get all the status code
    });
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  export const signUpUser = async (data:User) => {
    try {
      const response = await axios.post(`${host}/users`, data, {
        validateStatus: () => true, // get all the status code
    });
      return response.status;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }