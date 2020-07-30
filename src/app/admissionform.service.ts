import { Injectable } from '@angular/core';
import { User } from './admission-form/user';

@Injectable({
  providedIn: 'root',
})
export class AdmissionformService {
  createUser(user: User) {
    console.log('User Name: ' + user.username);
    console.log('Last Name: ' + user.lastname);
    console.log('Class: ' + user.class);
    console.log('Year of Passing: ' + user.year);
    console.log('Percentage: ' + user.percentage);
  }
  constructor() {}
}
