import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdmissionformService } from '../admissionform.service';
import { User } from './user';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css'],
})
export class AdmissionFormComponent implements OnInit {
  signupForm: FormGroup;
  namePattern = '^[a-zA-Z][a-zA-Z\\s]+$';
  classPattern = '^[a-zA-Z0-9_.-]*$';
  yearPattern = '^(19|20)\\d{2}$';
  percentagePattern = '^[0-9]*$';

  isValidFormSubmitted = null;

  constructor(private admissionservice: AdmissionformService) {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.namePattern),
      ]),
      class: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.classPattern),
      ]),
      year: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.yearPattern),
      ]),
      percentage: new FormControl(null, [
        Validators.required,
        Validators.pattern(this.percentagePattern),
      ]),
    });
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    if (this.signupForm.invalid) {
      return;
    }
    this.isValidFormSubmitted = true;
    let user: User = this.signupForm.value;
    this.admissionservice.createUser(user);
    this.signupForm.reset();
  }

  get username() {
    return this.signupForm.get('username');
  }

  get lastName() {
    return this.signupForm.get('lastName');
  }

  get class() {
    return this.signupForm.get('class');
  }
  get year() {
    return this.signupForm.get('year');
  }
  get percentage() {
    return this.signupForm.get('percentage');
  }
}
