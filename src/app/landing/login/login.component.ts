import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
//import { MessageBag, ValidationMessagesService } from '../../shared/validation';
import { AuthService } from '../../auth.service';
import { MdSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MdSnackBar]
})
export class LoginComponent {

  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private snackBar: MdSnackBar) {
  }
  ngOnInit() {
    this.buildForm();
  }
  buildForm(): void {
    this.loginForm = this.fb.group({
      'username': ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15)
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]]
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();

  }
  onSubmit() {
    this.auth.login(this.loginForm.value['username'], this.loginForm.value['password'])
      .then((res) => { this.showNotification(res); })
      .catch((error) => { });
  }
  showNotification(message: string) {
    this.snackBar.open(message, '', { duration: 3000 });
  }
  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }
  formErrors = {
    'username': '',
    'password': ''
  };
  validationMessages = {
    'name': {
      'required': 'Name is required.',
      'minlength': 'Name must be at least 4 characters long.',
      'maxlength': 'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'password': {
      'required': 'Power is required.'
    }
  };
}

