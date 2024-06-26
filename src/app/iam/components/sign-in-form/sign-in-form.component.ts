import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BaseFormComponent} from "../../../shared/components/base-form.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {SignInRequest} from "../../model/sign-in.request";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrl: './sign-in-form.component.css',
})
export class SignInFormComponent extends BaseFormComponent implements OnInit {
  hide = true;
  form!: FormGroup;
  submitted = false;

  constructor(private builder: FormBuilder, private authenticationService: AuthenticationService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.builder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    let username = this.form.value.username;
    let password = this.form.value.password;
    const signInRequest = new SignInRequest(username, password);
    this.authenticationService.signIn(signInRequest);
    this.submitted = true;
  }

  /*
  login(email: string, password: string) {
    if (email.toLowerCase() === 'client' && password.toLowerCase() === 'client') {
      this.router.navigate(['/client/home']);
    } else if (email.toLowerCase() === 'staff' && password.toLowerCase() === 'staff') {
      this.router.navigate(['/staff/home']);
    }
  }*/
}
