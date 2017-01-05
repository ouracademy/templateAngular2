import { Injectable } from '@angular/core';
export class User {
  username: string;
  password: string;
}

@Injectable()
export class AuthService {

  constructor() { }
  login(username: string, password: string): Promise<string> {
    const promise = new Promise((resolve, reject) => {
      if (this.isUserValid(username, password)) {
        resolve('Welcome');
      } else {
        reject(new Error("A user invalid"));
      }
    });
    return promise;
  }
  isUserValid(username: string, password: string) {
    if (username === 'demo' && password === 'admin') {
      return true;
    }
    return false;
  }

}
