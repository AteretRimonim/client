import {makeAutoObservable} from 'mobx';
import {LoginRequest, User} from '@/types/userType';
import {login} from '@/api/userApi';

class UserStore {
    users: User[] = [];
    user: User | null = null;
    isLoggedIn: boolean = false;
    loginError: string = "";

    constructor() {
      makeAutoObservable(this,{

      });
    }

    /**
 * Logs in the user and updates the MobX store based on the response.
 * @param {LoginRequest} data - User credentials.
 * 
 * Updates store properties like `isLoggedIn`, `user`, and `loginError` 
 * based on the login result.
 */
    async loginUser(data: LoginRequest) {
      try {
          const res = await login(data);
          if (res.error === true) {
              this.loginError = res.errorMessage || "An unexpected error occurred";
              this.isLoggedIn = false;
              this.user = null;
          } else if (res.statusCode === 200) {
              this.user = res.data;
              this.isLoggedIn = true;
              this.loginError = "";
          }
      }
      catch (error) 
       {
          this.loginError = "Login failed due to a network or server issue.";
       }
  }
  
  
  logoutUser() {
      this.user = null;
      this.isLoggedIn = false;
      this.loginError = "";
  }
  
    addUser(user: User): void {
      this.users.push(user);
    }
  
    removeUser(email: string): void {
      this.users = this.users.filter(user => user.email !== email);
    }
  
    get userCount(): number {
      return this.users.length;
    }
  }
  
  const userStore = new UserStore();
  export default userStore;
  