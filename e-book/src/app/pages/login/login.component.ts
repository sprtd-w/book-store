import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,  private router: Router) {
    this.form = fb.group({
      email: ['test@angular.io', [Validators.required]],
      password: ['test', [Validators.required]]
    });
  }

  login() {
    const val = this.form.value;
  }

}
