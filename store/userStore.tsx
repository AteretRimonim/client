import {makeAutoObservable} from 'mobx';
import {User} from '@/types/userType';
class UserStore {
    users: User[] = [];
  
    constructor() {
      makeAutoObservable(this);
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
  