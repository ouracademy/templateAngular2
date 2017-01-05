import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MessageBag, ValidationMessagesService } from 'ng2-custom-validation';
import { AuthService } from '../../auth.service';
import { MdSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MdSnackBar]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errors = new MessageBag();
  constructor(
    private validation: ValidationMessagesService,
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

    this.validation
      .seeForErrors(this.loginForm)
      .subscribe((errors: MessageBag) => this.errors = errors);
  }
  onSubmit() {
    this.auth.login(this.loginForm.value['username'], this.loginForm.value['password'])
      .then((res) => { this.showNotification(res); })
      .catch((error) => { });
  }
  showNotification(message: string) {
    this.snackBar.open(message,'', { duration: 3000 });
  }

}
